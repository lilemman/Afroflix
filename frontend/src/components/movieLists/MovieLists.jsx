import React from "react";
import "./MovieLists.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import MovieItem from "../movieItem/MovieItem";
import { useRef, useState } from "react";


const MovieLists = ({ list }) => {
  console.log(list)
  const listRef = useRef();

  const handleClick = (move) => {
    if (move === "left") {
      listRef.current.style.transform = `translateX(230px)`;
    }
  };
  return (
    <div className="list">
      <span className="list__title">{list.title}</span>
      
      <div className="list__wrapper">
        <ArrowBackIosIcon
          className="list__arrow left"
          onClick={() => handleClick("left")}
        />
        <div className="list__container" ref={listRef}>
          {list.content.map((item, i) => (
            <MovieItem  index={i} item={item} />
          ))}
         
        </div>
        <ArrowForwardIosOutlinedIcon
          className="list__arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MovieLists;
