// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gamelist from "./pages/Gamelist";
import Play from "./pages/Play";
import Profile from "./pages/Profile";
import AllUser from "./pages/AllUser";

function App() { 
    return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/profile" element={<Navbar />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/gamelist" element={<Navbar />}>
          <Route index element={<Gamelist />} />
        </Route>
        <Route path="/play" element={<Navbar />}>
          <Route index element={<Play />} />
        </Route>
        <Route path="/users" element={<Navbar />}>
          <Route index element={<AllUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;