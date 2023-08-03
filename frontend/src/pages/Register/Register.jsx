import React, { useRef, useState } from "react";
import Logo from "../../assets/logo/afro-logo.png";
import Background from "../../assets/images/back.png";
import "./Register.scss";
import Signup from "../../components/signUp/Signup";
import { Link } from "react-router-dom";
import Chat from "../../components/chat/Chat";
const Register = () => {
  const [email, setEmail] = useState("");
  const [signIn, setSignIn] = useState(false);

  const emailRef = useRef();
  const handleBtn = () => {
    setEmail(emailRef.current.value);
  };
  return (
    <div className="register">
      <div className="register__top">
        <div className="register__wrapper">
          <Link to="/">
            <img src={Logo} alt="" className="register__logo" />
          </Link>
          <Link to="/login">
            <button className="register__login" onClick={() => setSignIn(true)}>
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="register__container">
        {signIn ? (
          <Signup />
        ) : (
          <>
            <h1>
              Unlimited African movies,TV shows, and more <br />{" "}
            </h1>

            <h2>for only $9.99 per month</h2>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="register__input">
              <form>
                <input
                  type="email"
                  placeholder="email address"
                  className="register__email"
                  ref={emailRef}
                />
                <button
                  className="register__button"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <Chat/>
    </div>
  );
};

export default Register;
