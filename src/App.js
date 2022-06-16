import { Route } from "react-router-dom";
import Menu from "./routes/Menu";
import Home from "./routes/Home";
import { React, useState } from "react";

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
