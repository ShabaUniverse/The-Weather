import "react";
import "react-router-dom";
import "react-redux";
import "@reduxjs/toolkit";
import "./styles/App.scss";

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
