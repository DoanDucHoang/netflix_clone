import React from 'react'
import trailer from '../../assets/trailer-thienthanhomenh.mp4'
import {useState} from 'react'
import './Listitem.scss'
import poster from '../../assets/start-up.jpeg'
import { MdPlayArrow } from 'react-icons/md';
import { IoAddOutline } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import {Link} from 'react-router-dom'

export default function Listitem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className='listitem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={poster} alt="" />
      
      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop />
      
      <div className="iteminfo">
        <div className="icons">
          <Link to="/Watch" className="text"><MdPlayArrow className='icon'/></Link>
          <IoAddOutline className='icon'/>
          <AiOutlineLike className='icon'/>
          <AiOutlineDislike className='icon'/>
        </div>
        <div className="iteminfotop">
          <span>1 hour 40 mins</span>
          <span className="limit">+13</span>
          <span>2020</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolores esse, nulla explicabo voluptates cum est nisi.
        </div>
        <div className="genre">K-drama</div>
          </div>
          </>
      )}
        
    </div>
  )
}
