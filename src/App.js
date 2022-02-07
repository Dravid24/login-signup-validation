import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./component/login";
import Sigin from "./component/Sigin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Sigin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
