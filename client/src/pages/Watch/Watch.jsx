import React from 'react'
import  './Watch.scss'
import { MdKeyboardBackspace } from 'react-icons/md';
import video from '../../assets/The_Feels.mp4'
import { Link } from 'react-router-dom';


export default function Watch() {
  return (
      <div className='watch'>
      <div className="back">
        <Link to="/">
          <MdKeyboardBackspace />
            Home
        </Link>
          </div>
          <video className='video' src={video} controls autoPlay></video>
      </div>
      
  )
}
