import "./assets/scss/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useParams } from "react";
// CONTAINERS
import Home from "./containers/Home";
import Comics from "./containers/Comics";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/comics/:id">
          <Comics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
