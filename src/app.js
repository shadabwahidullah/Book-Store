import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import BooksPage from './components/BooksPage';
import Categories from './components/Categories';

const App = () => (
  <div className="panel-bg">
    <Router>
      <nav className="navbar">
        <h1>Awesome Books CMS</h1>
        <ul className="nav-list">
          <li>
            <Link className="nav-item" to="/">Books</Link>
          </li>
          <li>
            <Link className="nav-item" to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <BooksPage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
