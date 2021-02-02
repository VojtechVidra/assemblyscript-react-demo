import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Add } from "./Add";
import { Fib } from "./Fib";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Add</Link>
        </li>
        <li>
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/fibonacci">
          <Fib />
        </Route>
        <Route path="/">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
