import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

// Lazy-loaded components
const Home = lazy(() => import("./Components/Home/Home"));
const Classes = lazy(() => import("./Components/Classes/Classes"));
const Trainer = lazy(() => import("./Components/Trainer/Trainer"));
const Shop = lazy(() => import("./Components/Shop/Shop"));
const Blob = lazy(() => import("./Components/Blob/Blob"));

function App() {
  return (
    <Router>
      <Navbar /> {/* Fixed Navbar */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Route */}
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blob" element={<Blob />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
