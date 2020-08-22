import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//antd imports

import "antd/dist/antd.css";

import Firstpage from "./Components/Firstpage";
import Profile from "./Components/Profile";
//css files

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Firstpage} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
