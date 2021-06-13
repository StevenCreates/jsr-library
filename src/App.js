import styled from "styled-components";
import { AppProvider } from "./utils/ReactPagesContext";
import {AppRouting} from "./AppRouting";

const AppStyles = styled.div`
  display: flex;
  maxwidth: 100vw;
`;

function App() {
  return (
    <AppProvider>
      <AppStyles>
        <AppRouting />
      </AppStyles>
    </AppProvider>
  );
}

export default App;
