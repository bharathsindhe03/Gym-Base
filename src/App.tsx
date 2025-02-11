import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Animation from "./Components/Animation/Animation";
// Lazy-loaded components
const Home = lazy(() => import("./Page/Home/Home"));
const Classes = lazy(() => import("./Page/Classes/Classes"));
const Trainer = lazy(() => import("./Page/Trainer/Trainer"));
const Shop = lazy(() => import("./Page/Shop/Shop"));
const Blob = lazy(() => import("./Page/Blob/Blob"));

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Fixed Navbar */}
      <Suspense fallback={<Animation />}>
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
