import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";




function App() {
  return (
    <>
    <GlobalStyle />
    <StyledApp>
      <Heading as='h1'>The Wild Oasis</Heading>
      <Heading as='h2'>The Wild 2</Heading>
      <Button onClick={() => alert("Check in")}>Check in</Button>
      <Button onClick={() => alert("Check out")}>Check out</Button>

      <Heading as='h3'>Form</Heading>

      <Input type="number" placeholder="Number of geste" />
      <Input type="number" placeholder="Number of geste" />
    </StyledApp>
    </>
  );
}

export default App;




const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;


