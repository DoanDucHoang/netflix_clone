import React from 'react'
import './Navbar.scss'
import logo from '../../assets/logohoang.png'
import avatar from '../../assets/avatar.jpeg'
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiDownArrow } from "react-icons/bi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
  return (
      <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
          <div className="container">
              <div className="left">
                  <img src={logo} alt="" />
                  <span>Homepage</span>
                  <span>Series</span>
                  <span>Movies</span>
                  <span>New and Popular</span>
                  <span>My list</span>
              </div>
              <div className="right">
                  <AiOutlineSearch  className='icon'/>
                  <span>Kids</span>
                  <IoMdNotificationsOutline className='icon'/>
                  <img src={avatar} alt="" />
                  <div className="profile">
                      <BiDownArrow className={scrolled ? 'icon arrow scrolled' : 'icon arrow'} />
                      <div className={scrolled ? 'options scrolled' : 'options'}>
                          <Link to="/Login" className='text'>
                              <span>Login</span>
                          </Link>
                          <Link to="/Register" className='text'>
                              <span>Register</span>
                          </Link>
                          <Link to="/Login" className='text'>
                              <span>Logout</span>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar