import React, { useState, useEffect } from "react";
import "./MovieItem.scss";
import AKA from "../../assets/images/aka.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
//import AkaTrailer from "../../assets/videos/";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieItem = ({ index, item }) => {
  const [hovered, setHovered] = useState(false);
  const [movie, setMovie] = useState({});
  console.log(item);
  const api_url = process.env.base_url || "http://localhost:8080";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzE0MTBiMTBkNTliNzU4MTIwOWZmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTA3NDEwMywiZXhwIjoxNzIyNjEwMTAzfQ.HMBbpCdymr2HU2J7ZUdN9v5BCDv5MuU41Ws1By3AD8c";
  const authAxios = axios.create({
    baseURL: api_url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await authAxios.get("/movies/find/" + item, {
          // headers: {
          //   Authorization: {
          //     token:
          //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzE0MTBiMTBkNTliNzU4MTIwOWZmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDUwMjM4NiwiZXhwIjoxNjkwOTM0Mzg2fQ.QZ1mPIBy08IjW9bjeWlAiK9brRuPS6prdL6n_v1qIWo",
          //   },
          // },
        });
        console.log(res.data);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="item"
        style={{ left: hovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={movie?.img} alt="" />
        {hovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="item__info">
              <div className="item__icons">
                <PlayArrowIcon className="item__icon" />
                <AddIcon className="item__icon" />
                <ThumbUpOutlinedIcon className="item__icon" />
                <ThumbDownOffAltOutlinedIcon className="item__icon" />
              </div>
              <div className="item__top">
                <span>{movie.title}</span>
                <span className="item__rated">{movie.limit}</span>
                <span className="item__description">{movie.description}</span>
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default MovieItem;
