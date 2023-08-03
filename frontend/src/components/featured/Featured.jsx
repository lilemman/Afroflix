import React, { useEffect, useState } from "react";
import "./Featured.scss";
import Castle2 from "../../assets/images/castle2.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CastleLogo from "../../assets/icons/castle.png";
import axios from "axios";
const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`);
        setContent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);
  return (
    <div className="featured">
      {type && (
        <div className="featured__category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
          </select>
        </div>
      )}
      <img src={Castle2} alt="castle background" width="100%" />
      <div className="featured__info">
        <img src={CastleLogo} alt="" />
        <span className="featured__description">
          A pair of high-powered, successful lawyers find themselves defending
          opposite interests of the justice system, causing a strain on their
          happy marriage.
        </span>
        <div className="featured__buttons">
          <button className="featured__buttons--play">
            <PlayArrowIcon /> <span>Play</span>
          </button>
          <button className="featured__buttons--more">
            <InfoOutlinedIcon /> <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
