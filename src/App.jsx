import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";

const App = () => (
  <div className="bg-[#001327] text-white min-h-screen">
    <Header />
    <Home />
    <Footer />
    <ToastContainer />
  </div>
);

export default App;
