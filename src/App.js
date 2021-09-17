import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/new">
          <NewQuote/>
        </Route>
        <Route path="/quotes/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
