import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImageFinder from "./components/ImageFinder";
import ImageHome from "./components/ImageHome";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ImageFinder} />
          <Route path="/images/:id" component={ImageHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
