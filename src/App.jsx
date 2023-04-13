import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Category from "./components/Category/Category";
import Featured from "./components/Featured/Featured";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
