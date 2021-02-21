import "./assets/scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useParams } from "react";
import { useState } from "react";

//COMPONENTS
import Header from "./components/Header";
// CONTAINERS
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import AllComics from "./containers/AllComics";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Switch>
        <Route path="/comics/:id">
          <Comics />
        </Route>
        <Route path="/comics">
          <AllComics setSearch={setSearch} search={search} />
        </Route>
        <Route path="/">
          <Home search={search} setSearch={setSearch} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
