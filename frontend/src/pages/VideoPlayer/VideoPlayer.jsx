import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import React from "react";
import Preview from "../../assets/videos/inumber.mp4";
import "./VideoPlayer.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="player">
      <Link to="/home">
        <div className="player__backArrow">
          <ArrowBackIos />
          Home
        </div>
      </Link>

      <video
        src={Preview}
        className="player__video"
        autoplay={true}
        progress
        controls
      />
    </div>
  );
};

export default VideoPlayer;
