import { InfoPage } from "./components/InfoPage";
import { SideNav } from "./components/SideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
