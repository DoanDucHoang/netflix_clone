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
import { isLoggedIn } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import loggedReducer from '../../reducers'
import isLoggedInReducer from '../../reducers/loggedIn'


const Home = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [isLogged , setIsLogged] = useState(false)

  const LoggedIn = isLoggedIn()
  const a = loggedReducer(false, LoggedIn)
  const loggedIn = useSelector(state => state.isLoggedIn);

  

  useEffect(() => {
    setInterval(() => {
      setShowModal(true);
    }, 3000);
  }, []);
  let set = true;
  let modal = <div>
          {showModal && <Modal />}
        </div>

  console.log(loggedIn);
  return (
    
    <div className='home'>
      { !loggedIn ? <div className='modal'> {modal} </div> : ''}
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