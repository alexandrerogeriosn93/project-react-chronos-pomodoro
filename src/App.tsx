import { MessagesContainer } from "./components/MessagesContainer";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MainRouter } from "./routers/MainRouter";
import "./styles/global.css";
import "./styles/theme.css";

export const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
};
