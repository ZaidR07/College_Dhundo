// import { DarkThemeToggle } from "flowbite-react";
import Home from "./Pages/Home";
import Colleges from "./Pages/Colleges";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigationbar } from "./Components/Navigationbar";


function App() {
  return (
    
    <BrowserRouter>
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Colleges" element={<Colleges/>}/>

      
          
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
