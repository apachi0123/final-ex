import React from "react";
import { Route } from "react-router-dom";
import Menu from "./routes/Menu";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/Menu">
        <Menu />
      </Route>
    </>
  );
}

export default App;
