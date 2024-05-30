import styled from "styled-components";
import { Reset } from "styled-reset";
import MemoPad from "./components/MemoPad";

function App() {
  return (
    <>
      <Reset />
      <Wrapper>
        <MemoPad />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default App;
