import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="max-w-screen relative mt-20">
      <Navbar />
      <Routes>
        <Route path="/" element=<Home />></Route>
        <Route path="cart" element=<Cart />></Route>
      </Routes>
    </div>
  );
}

export default App;
