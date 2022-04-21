import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/core/header/header";
import Main from "./pages/main/main.page";
import Catalog from "./pages/catalog/catalog.psge";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;
