import React from "react";
import "./Profile.scss";
import Navbar from "../navbar/Navbar";
import Avatar from "../../assets/icons/Netflix-avatar.png";
import Plans from "../plans/Plans";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h1 className="profile__title">Edit Profile</h1>
        <div className="profile__info">
          <img src={Avatar} alt="" className="profile__img" />
          <div className="profile__details">
            <h2 className="profile__heading">ea@gmail.com</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <Plans />
              <Link to="/">
                <button className="profile__signOut">Sign Out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
