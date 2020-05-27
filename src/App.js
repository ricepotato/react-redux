import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <h1>React Redux</h1>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}
export default App;
