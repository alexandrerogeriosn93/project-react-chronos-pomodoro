import { useEffect, useReducer } from "react";

import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { TaskActionTypes } from "./taskActions";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((event) => {
    const countDownSeconds = event.data;

    if (countDownSeconds <= 0) {
      dispatch({ type: TaskActionTypes.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Worker terminado por falta de active task.");
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
