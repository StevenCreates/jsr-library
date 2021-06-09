import { InfoPage } from "./components/InfoPage";
import styled from "styled-components";
import { SideNav } from "./components/SideNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppStyles = styled.div`
  display: flex;
  maxwidth: 100vw;
`;

function AppRouting() {
  return (
    <>
      <SideNav />
      <Router>
        <Switch>
          <Route exact path="/">
            <InfoPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default AppRouting;
