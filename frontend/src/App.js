import "./App.scss";
import Signup from "./components/signUp/Signup";
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Plans from "./components/plans/Plans";
import Search from "@mui/icons-material/Search";
import Chat from "./components/chat/Chat";
function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/home" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Signup />} />

          <Route path="/register" element={!user ? <Register /> : <Home />} />

          <Route path="/login" element={!user ? <Signup /> : <Home />} />
          {user && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Home type="movies" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<VideoPlayer />} />
            </>
          )}

          {/* <Route path="/homepage" element={<Home />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/video" element={<VideoPlayer />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
