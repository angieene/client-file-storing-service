import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
