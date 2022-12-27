import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Catalog">
            <Catalog />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
