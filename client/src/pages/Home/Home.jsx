import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import Modal from '../../components/modal/modal'
import './Home.scss'
import '../../components/modal/modal.scss'
import {useState, useEffect} from 'react';



const Home = () => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  return (
    <div className='home'>
      {showModal && <Modal/>}
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