import { PlayCircleIcon } from "lucide-react";
import { useRef } from "react";

import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export const MainForm = () => {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: 1,
      starDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: "00:00",
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
  };

  return (
    <form action="" className="form" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput
          type="text"
          id="inputTask"
          labelText="task"
          placeholder="task"
          ref={taskNameInput}
        />
      </div>
      <div className="formRow">
        <p>Próximo intervalo é de 5 min.</p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};
