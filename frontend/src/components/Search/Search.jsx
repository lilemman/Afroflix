import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import MovieLists from "../movieLists/MovieLists";

const Search = ({  onSearchChange  }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const api_url = process.env.base_url || "http://localhost:8080";
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzE0MTBiMTBkNTliNzU4MTIwOWZmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDUxNDIzNywiZXhwIjoxNjkwOTQ2MjM3fQ.aD_sZQRjoolmUu4unEDWVYKVseSFjNsWo3aJx_9cQwM";
  // const authAxios = axios.create({
  //   baseURL: api_url,
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // useEffect(() => {
  //   const getRandomLists = async () => {
  //     try {
  //       const res = await authAxios.get(`${api_url}/lists`);

  //       console.log(res.data);
  //       setMovies(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getRandomLists();
  // }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };
  const filteredResults = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
