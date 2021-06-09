import styled from "styled-components";
import { ReactPagesProvider } from "./ReactPages/ReactPagesContext";
import AppRouting from "./AppRouting";

const AppStyles = styled.div`
  display: flex;
  maxwidth: 100vw;
`;

function App() {
  return (
    <ReactPagesProvider>
      <AppStyles>
        <AppRouting />
      </AppStyles>
    </ReactPagesProvider>
  );
}

export default App;
