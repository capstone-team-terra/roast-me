import React from "react";
//import "./App.css";
import WelcomePage from "./components/WelcomePage";
import { Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
          <Route path="/results/:user">
            <LogIn />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
      </Switch>
      </header>
    </div>
  );
};
export default App;
