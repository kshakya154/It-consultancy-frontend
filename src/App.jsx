import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Cursor from "./components/cursor";
import { Route, Routes, Router } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/Layout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
