import { Container } from "./components/Container/Container";
import { Heading } from "./components/Heading/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export const App = () => {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
      <Container>
        <Heading>Form</Heading>
      </Container>
      <Container>
        <Heading>Footer</Heading>
      </Container>
    </>
  );
};
