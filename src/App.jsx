import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./watch/Dashboard";
import Sidebar from "./watch/Sidebar";
import Video from "./watch/Video";
import Balance from "./watch/Balance";
import Landingpage from "./landingpage/Landingpage";
import Signupform from "./landingpage/Signupform";
import Login from "./landingpage/Login";
import Settings from "./watch/Setting";
import Home from "./landingpage/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}>
          <Route index element={<Home/>} />
          <Route path="signup" element={<Signupform />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/dasboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route index path="home" element={<Home />} />
          <Route path="video" element={<Video />} />
          <Route path="balance" element={<Balance />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
