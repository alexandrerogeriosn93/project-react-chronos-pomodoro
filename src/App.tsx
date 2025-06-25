import { TimerIcon } from "lucide-react";

import { Heading } from "./components/Heading/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export const App = () => {
  return (
    <>
      <Heading>
        Olá mundo{" "}
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
};
