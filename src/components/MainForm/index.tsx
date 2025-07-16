import { PlayCircleIcon } from "lucide-react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export const MainForm = () => {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput
          type="text"
          id="inputTask"
          labelText="task"
          placeholder="task"
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
