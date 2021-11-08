import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./components/Books";
import Book from "./components/Books";
import Categories from "./components/Categories";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/categories">
            <Categories/>
        </Route>
        <Route path="/">
            <Books/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
