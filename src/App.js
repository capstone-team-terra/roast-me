import React from "react";
//import "./App.css";
import WelcomePage from "./components/WelcomePage";
import { Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import GitHub from "./GitHub"

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
      <GitHub />
      <Switch>
          <Route path="/results/:user">
            <LogIn />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
      </Switch>
      </div>
    </div>
  );
};
export default App;
