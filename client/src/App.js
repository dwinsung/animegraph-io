import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, User } from "./routes";

function App() {
  return (
    <div className="bg-indigo-900 h-screen">
      <Router>
        <div className="flex justify-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:user" component={User} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
