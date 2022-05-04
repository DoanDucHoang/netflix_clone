import { useRef } from "react";
import { useState } from "react";
import "./Register.scss";
import logo from "../../assets/logohoang.png";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src= {logo}
            alt=""
          />
          <button className="loginButton">Đăng ký</button>
        </div>
      </div>
      <div className="container">
        <h1>Không giới hạn phim, chương trình truyền hình và hơn thế nữa.</h1>
        <h2>Xem ở bất cứ đâu. Hủy bất cứ lúc nào.</h2>
        <p>
          Sẵn sàng để xem? Nhập email của bạn để tạo hoặc khởi động lại tư cách thành viên của bạn.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Bắt đầu
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              <Link to="/Price" className="text">Bắt đầu</Link> 
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
