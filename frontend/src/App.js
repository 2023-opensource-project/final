import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import MasterResume from "./Pages/MasterResume";
import MasterCoverLetter from "./Pages/MasterCoverLetter";
import CoverLetter from "./Pages/CoverLetter";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Mypage from "./Pages/Mypage";
import ChatButton from "./Components/ChatButton";
import { ToastContainer } from "react-toastify";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/masterResume" element={<MasterResume />} />
        <Route path="/masterCoverLetter" element={<MasterCoverLetter />} />
        <Route path="/coverLetter" element={<CoverLetter />} />
        <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/mypage" element={<Mypage currentUser={currentUser} posts={posts} />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ChatButton />
    </BrowserRouter>
  );
}

export default App;