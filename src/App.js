import {BrowserRouter as Router,Routes,Route} from  "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
