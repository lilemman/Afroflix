import { useState, useEffect } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo/afro-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "../../assets/icons/Netflix-avatar.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import Search from "@mui/icons-material/Search";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo--container">
          <Link to="/">
            <img src={Logo} alt="Netflix Logo" className="navbar__img" />
          </Link>
          <Link to="/home" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
        </div>
        <div className="navbar__menu">
          <SearchIcon 
          
          className="navbar__icons" />
          {/* <Search/> */}
          <span>KID</span>
          <NotificationsIcon className="navbar__icons" />
          <Link to="/profile">
            <img src={Avatar} alt="avatar" className="navbar__avatar" />
          </Link>
          <div className="navbar__profile">
            <KeyboardArrowDownIcon className="navbar__icons" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
