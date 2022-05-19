import React from 'react'
import logo from "../../assets/logohoang.png";
import "./Price.scss";
import { AiOutlineCheck } from 'react-icons/ai';
import { CgSmartphone } from 'react-icons/cg';
import { BsTabletLandscape } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { AiOutlineLaptop } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function price() {

    
    

  return (
      <div>
          <div className="price">
              <div className="top">
                  <div className="wrapper">
                      <img className='logo' src={logo} alt="" />
                      <span>Đăng xuất</span>
                  </div>
              </div>
              <div className="container">
                  <div className="desc-title">
                      <h2>Chọn gói dịch vụ phù hợp với bạn</h2>
                  </div>
                  <div className="desc-content">
                      <ul>
                          <li>
                              <div className="icon"><AiOutlineCheck /></div>
                              <div className="content">
                                  <span>Truy cập thêm nhiều chương trình và phim.</span>
                              </div>
                          </li>
                          <li>
                                <div className="icon"><AiOutlineCheck /></div>
                              <div className="content">
                                  <span>Lựa chọn xem trên nhiều thiết bị hơn.</span>
                              </div>
                          </li>
                          <li>
                                <div className="icon"><AiOutlineCheck /></div>
                              <div className="content">
                                  <span>Thay đổi hoặc hủy gói dịch vụ của bạn bất cứ khi nào.</span>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="pricelist">
                      <div className="level">
                          <ul>
                              <li>Di động</li>
                              <li>Cơ bản</li>
                              <li>Tiêu chuẩn</li>
                              <li>Cao cấp</li>
                          </ul>
                      </div>
                      <div className="pricemonth">
                          <div className="title">
                            <span>Giá hàng tháng</span>
                          </div>
                          <div className="price">
                              <ul>
                                  <li>100.000 đ</li>
                                  <li>180.000 đ</li>
                                  <li>220.000 đ</li>
                                  <li>260.000 đ</li>
                              </ul>
                          </div>
                      </div>

                      <div className="pricemonth">
                          <div className="title">
                            <span>Chất lượng video</span>
                          </div>
                          <div className="price">
                              <ul>
                                  <li>Tốt</li>
                                  <li>Tốt</li>
                                  <li>Tốt hơn</li>
                                  <li>Tốt nhất</li>
                              </ul>
                          </div>
                    
                      </div>

                      <div className="pricemonth">
                          <div className="title">
                            <span>Độ phân giải</span>
                          </div>
                          <div className="price">
                              <ul>
                                  <li>480p</li>
                                  <li>480p</li>
                                  <li>1080p</li>
                                  <li>4K+HDR</li>
                              </ul>
                          </div>
                    
                      </div>

                      <div className="pricemonth">
                          <div className="title">
                            <span>Thiết bị</span>
                          </div>
                          <div className="price device">
                              <ul>
                                  <li>
                                      <li><CgSmartphone/> <span>Điện thoại</span></li>
                                      <li><BsTabletLandscape/> <span>Máy tính bảng</span></li>
                                  </li>
                                  <li>
                                      <li><CgSmartphone/> <span>Điện thoại</span></li>
                                      <li><BsTabletLandscape/> <span>Máy tính bảng</span></li>
                                      <li><AiOutlineLaptop/> <span>Máy tính</span></li>
                                      <li><FiMonitor/> <span>TV</span> </li>
                                  </li>
                                  <li>
                                      <li><CgSmartphone/> <span>Điện thoại</span></li>
                                      <li><BsTabletLandscape/> <span>Máy tính bảng</span></li>
                                      <li><AiOutlineLaptop/> <span>Máy tính</span></li>
                                      <li><FiMonitor/> <span>TV</span> </li>
                                  </li>
                                  <li>
                                      <li><CgSmartphone/> <span>Điện thoại</span></li>
                                      <li><BsTabletLandscape/> <span>Máy tính bảng</span></li>
                                      <li><AiOutlineLaptop/> <span>Máy tính</span></li>
                                      <li><FiMonitor/> <span>TV</span> </li>
                                  </li>
                                  
                                  
                              </ul>
                          </div>
                    
                      </div>
                  </div>
                  <div className="text">
                      <small><span target="_blank">Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p), Ultra HD (4K) và HDR hay không phụ thuộc vào dịch vụ internet và khả năng của thiết bị. Không phải tất cả nội dung đều có sẵn ở mọi độ phân giải. Xem Điều khoản sử dụng của chúng tôi để biết thêm chi tiết.</span></small> <br /> <br />
                      <small><span>Chỉ những người sống cùng bạn mới có thể dùng tài khoản của bạn. Xem trên 4 thiết bị khác nhau cùng lúc với gói Cao cấp, 2 với gói Tiêu chuẩn và 1 với gói Cơ bản và Di động.</span></small>
                  </div>
                  <div className="button">
                      <Link to="/Login" className="text">
                        <button>
                            Xác nhận
                        </button>
                        </Link> 
                  </div>
              </div>
          </div>
    </div>
  )
}
