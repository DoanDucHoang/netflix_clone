import React from 'react'
import { FaUserLock } from 'react-icons/fa';
import './modal.scss';
import '../../pages/Home/Home.scss'
import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
function modal() {
    return (
      <div>
          <div className="modalbackground">
              <div className="modalcontainer">
                  
                  <div className="iconlock">
                    <FaUserLock/>
                  </div>
                  <div className="title">
                      <h2>Bạn đang sử dụng gói dịch vụ miễn phí</h2>
                  </div>
                  <div className="body">
                      <p>Nếu bạn muốn xem trên thiết bị này, hãy nâng cấp lên gói dịch vụ tính phí. Bạn cũng sẽ mở khóa các chương trình truyền hình và phim có trên HOANG</p>
                  </div>
                    <div className="footer">
                        <Link to="/Register" className="text">
                            <button className='btnregister'>Đăng ký</button>
                        </Link>
                        <Link to="/Price" className="text">
                            <button className='btnlogin'>Nâng cấp gói dịch vụ</button>
                        </Link>
                  </div>
              </div>
          </div>
    </div>
    );
}

export default modal