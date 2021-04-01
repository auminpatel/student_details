/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Table from './table';
import Form from './form';
import Edit from './edit';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">StudentDetails</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/details">
            <Table />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
