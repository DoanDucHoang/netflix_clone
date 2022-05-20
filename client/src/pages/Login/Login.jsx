import "./Login.scss";
import logo from "../../assets/logohoang.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from "../../actions";
import Home from "../Home/Home";

export default function Login() {

  const loggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  console.log(loggedIn);

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
          <input type="email" placeholder="Email or phone number"/>
          <input type="password" placeholder="Password" />
            <Link to="/" className="text"><button className="loginButton" onClick={() => dispatch(isLoggedIn())}> Đăng nhập </button></Link>
          
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
