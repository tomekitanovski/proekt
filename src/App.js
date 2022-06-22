import NavBar from "./components/Nav";
import Home from "./components/Home";
import  Breakfast from "./components/Brekfast";
import  Brunch  from "./components/Brunch";
import  Lunch  from "./components/Lunch";
import  Dinner  from "./components/Dinner";
import  Login  from "./components/Login";
import CreateAcc from "./components/CreateAcc";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/breakfast" element={<Breakfast />} />
        <Route  path="/brunch" element={<Brunch />} />
        <Route  path="/lunch" element={<Lunch />} />
        <Route  path="/dinner" element={<Dinner />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<CreateAcc />} />
      </Routes>
    </div>
  );
}

export default App;