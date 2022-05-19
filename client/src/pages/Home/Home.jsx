import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import Modal from '../../components/modal/modal'
import Login from '../Login/Login'
import './Home.scss'
import '../../components/modal/modal.scss'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const Home = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowModal(true);
    }, 3000);
  }, []);
  let set = true;
  let modal
  if (!loggedIn) {
    modal = <div>
          {showModal && <Modal />}
        </div>
  }

  const handleLoggedIn = () => {
    setLoggedIn(true)
  }

  console.log(loggedIn);
  return (
    
    <div className='home'>
      <div className='modal' onClick={handleLoggedIn}>{modal}</div>
      <Navbar />
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
      </div>
  )
  
}

export default Home