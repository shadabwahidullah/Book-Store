import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import BooksPage from './components/BooksPage';
import Categories from './components/Categories';

const App = () => (
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
        <Categories />
      </Route>
      <Route path="/">
        <BooksPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
