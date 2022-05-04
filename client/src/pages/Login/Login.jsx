import "./Login.scss";
import logo from "../../assets/logohoang.png";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Đăng nhập</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton"> <Link to="/" className="text">Đăng nhập</Link></button>
          <span>
            New to HOANG? <b> <Link to="/Register" className="text">Đăng ký ngay.</Link> </b>
          </span>
          <small>
            Trang này được bảo vệ bởi reCAPTCHA của Google để đảm bảo bạn không phải là
            người máy. <b>Thêm</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
