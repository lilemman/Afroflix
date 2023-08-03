import React, { useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import MovieLists from "../../components/movieLists/MovieLists";
import axios from "axios";
import Chat from "../../components/chat/Chat";

const Home = ({ type, onSearchChange }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

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
    const getRandomLists = async () => {
      try {
        const res = await authAxios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
        );

        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      {/* <img src={Castle} alt="castle background" width="100%" /> */}
      <Featured type={type} />
      {/* <Search searchChange={onSearchChange} /> */}

      {lists.map((list) => (
        <MovieLists list={list} key={list._id} />
      ))}
      <Chat />
    </div>
  );
};

export default Home;
