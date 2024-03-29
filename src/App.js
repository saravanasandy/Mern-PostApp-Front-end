import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header/>
         <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        
          
         </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
