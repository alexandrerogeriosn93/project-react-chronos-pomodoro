import { PlayCircleIcon } from "lucide-react";

import { HomeProps } from "../../pages/Home";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export const MainForm = ({ state, setState }: HomeProps) => {
  const handleClick = () => {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "23:34",
      };
    });
  };

  return (
    <form action="" className="form">
      <div>
        <button type="button" onClick={handleClick}>
          Clique aqui
        </button>
      </div>
      <div className="formRow">
        <DefaultInput
          type="text"
          id="inputTask"
          labelText="task"
          placeholder="task"
        />
      </div>
      <div className="formRow">
        <p>Próximo intervalo é de {state.config.workTime} min.</p>
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
