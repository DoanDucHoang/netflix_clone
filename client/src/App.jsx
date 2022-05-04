import Home from "./pages/Home/Home";
import {useState, useEffect} from 'react';
import './app.scss'
import Watch from "./pages/Watch/Watch";
import Register from "./pages/register/Register";
import Modal from "./components/modal/modal";
import Login from "./pages/Login/Login";
import Price from "./pages/Price/Price";
import { Route, Routes } from 'react-router-dom';
const App = () => {

  return (
    
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Price" element={ <Price/>} />
          <Route path="/Login" element={ <Login/>} />
          <Route path="/Register" element={ <Register/>}/>
          <Route path="/Watch" element={<Watch/>} />
        </Routes>
    </>
  );
};

export default App;