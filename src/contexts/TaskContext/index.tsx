import { createContext, useContext } from "react";

import { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  return (
    <TaskContext.Provider value={{ ...initialContextValue }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
