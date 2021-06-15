import { useContext, useEffect, useMemo } from "react";
import { SideNav } from "./components/SideNav";
import { useAddLinksToNavigation } from "./hooks/useAddLinksToNavigation";
import { BreadCrumbNavigation } from "./components/BreadCrumbNavigation";
import { UseEffect, UseState } from "./ReactPages";
import { AppContext } from "./utils/ReactPagesContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { MANUAL_ADD_NAVIGATION_LINKS } from "./NavigationLinks";

export const AppRouting = () => {
  const { links, setLinks } = useContext(AppContext);

  const newNavigationLinks = useAddLinksToNavigation(
    MANUAL_ADD_NAVIGATION_LINKS
  );

  useEffect(() => {
    setLinks(newNavigationLinks ? newNavigationLinks : links);
  }, []);

  const history = useHistory();
  return (
    <>
      <Router history={history}>
        <SideNav />
        <Switch>
          {/* Commenting out for future use */}
          {/* <Route exact path="/">
            <p>Home</p>
          </Route> */}
          <Route exact path="/useState">
            <UseState />
          </Route>
          <Route exact path="/useEffect">
            <UseEffect />
          </Route>
        </Switch>
        <BreadCrumbNavigation />
      </Router>
    </>
  );
};
