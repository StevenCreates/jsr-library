import {useContext, useEffect} from 'react'
import { InfoPage } from "./components/InfoPage";
import { SideNav } from "./components/SideNav";
import { UseState } from "./ReactPages/UseState";
import { AppContext } from './utils/ReactPagesContext';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

export const AppRouting = () => {
const { links, setLinks } = useContext(AppContext)

  useEffect(() => {
    setLinks([
      ...links,
      {
           name: "useState", path: "/useState" ,
      }
  ])
  }, [])

  const history = useHistory();
  return (
    <>
      <Router history={history}>
      <SideNav />
        <Switch>
          <Route exact path="/">
            <p>Home</p>
          </Route>
          <Route exact path="/useState">
            <UseState />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

