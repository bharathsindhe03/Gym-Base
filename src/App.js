import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Classes from "./Components/Classes/Classes";
import Trainer from "./Components/Trainer/Trainer";
import Shop from "./Components/Shop/Shop";
import Blob from "./Components/Blob/Blob";

function App() {
  return (
    <Router>
      <Navbar /> {/* Fixed Navbar */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blob" element={<Blob />} />
      </Routes>
    </Router>
  );
}

export default App;
