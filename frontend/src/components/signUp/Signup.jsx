import React from "react";
import "./Signup.scss";
import Logo from "../../assets/logo/afro-logo.png";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="register">
        <div className="register__top">
          <div className="register__wrapper">
            <Link to="/">
              <img src={Logo} alt="" className="register__logo" />
            </Link>
          </div>
        </div>
        <div className="signup">
          <form className="signup">
            <h1 className="signup__title">Sign In</h1>
            <input type="email" placeholder="Email" className="signup__input" />
            <input
              type="password"
              placeholder="Password"
              className="signup__input"
            />
            <Link to="/profile">
              <button type="submit" className="signup__button">
                Sign In
              </button>
            </Link>
          </form>
        </div>
        ;
      </div>
    </>
  );
};

export default Signup;
