import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import "./styles/global.css";
import "./styles/theme.css";

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
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
            <p>Neste ciclo descanse por 5 minutos.</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p>1 2 3 4 5 6 7</p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
};
