import React from 'react'
import poster from '../../assets/thien-than-ho-menh-poster.jpg'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import './Featured.scss'
import { Link } from 'react-router-dom';

export default function Featured({type}) {
  return (
      <div className='featured'>
          {type && (
              <div className="category">
                  <span>{type === "movie" ? "Movies" : "Series"}</span>
                  <select name="genre" id="genre">
                      <option>Genre</option>
                      <option value="adventure">Adventure</option>
                      <option value="comedy">Comedy</option>
                      <option value="crime">Crime</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="k-drama">K-drama</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="cartoon">Cartoon</option>
                      <option value="documentary">Documentary</option>
                      <option value="action">Action</option>
                  </select>
              </div>
          )}
          <img src={poster} alt=""/>
          <div className="info">
              <div className='title'>
                  <span>thiên thần hộ mệnh</span>
              </div>
              <div className='desc'>
                  <span>Thảm kịch xảy ra với một ngôi sao nhạc pop khiến ca sĩ hát bè cho cô trở nên nổi tiếng, nhưng những hiện tượng siêu nhiên cứ bám theo ngôi sao mới không ngừng</span>
                  <div className="buttons">
                      <Link to="/Watch">
                        <button className='play'>
                            <FaPlay />
                           Phát
                        </button>
                        </Link> 
                      <button className='more'>
                          <AiOutlineInfoCircle />
                          <span>Thông tin khác</span>
                      </button>
                  </div>
              </div>
          </div>
    </div>
  )
}
