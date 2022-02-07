import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/login";
import NotFound from "./component/NotFound";
import Sigin from "./component/Sigin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Sigin />}></Route>
        <Route path="/home-page" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
