import React from "react";
import ReactDOM from "react-dom";
import "../static/style.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
//import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
    <Router>
            <App />
    </Router>,
  // </React.StrictMode>,
  document.getElementById("root")
);
