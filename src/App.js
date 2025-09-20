import React from "react";
// import { useState } from 'react';
// import Signup from "./Signup";
// import Login from "./Login";
// import Navbar from "./Navbar";
import Home from "./Home";
// import Notepad from "./Notepad";
// import Profile from "./Profile";
//  import { Routes,Route } from "react-router-dom";

const App = () => {
  // const [userData,setUserData] = useState([])
   return(
    <div>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notepad" element={<Notepad />} />
      </Routes> */}
      <Home />
    </div>
    
    )
}

export default App