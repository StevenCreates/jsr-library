import { InfoPage } from "./components/InfoPage";
import { SideNav } from "./components/SideNav";
import styled from "styled-components";
import { ReactPagesProvider } from "./ReactPages/ReactPagesContext";

const AppStyles = styled.div`
  display: flex;
  maxwidth: 100vw;
`;

function App() {
  return (
    <ReactPagesProvider>
      <AppStyles>
        <SideNav />
        <InfoPage />
      </AppStyles>
    </ReactPagesProvider>
  );
}

export default App;
