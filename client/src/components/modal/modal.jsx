import React from 'react'
import { FaUserLock } from 'react-icons/fa';
import './modal.scss';
import '../../pages/Home/Home.scss'
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
                      <button className='btnregister'>Đăng ký</button>
                      <button className='btnlogin'>Nâng cấp gói dịch vụ</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default modal