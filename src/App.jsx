import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./watch/Dashboard";
import Video from "./watch/Video";
import Balance from "./watch/Balance";
import Landingpage from "./landingpage/Landingpage";
import Signupform from "./landingpage/Signupform";
import Login from "./landingpage/Login";
import Settings from "./watch/Setting";
import Home from "./landingpage/Home";
import DashLayout from "./Dashboards/DashLayout";
import DashHome from "./Dashboards/DashHome";
import Users from "./Dashboards/Users";
import Videos from "./Dashboards/Videos";
import Transactions from "./Dashboards/Transactions";
import Earnings from "./Dashboards/Earnings";
import Profile from "./Dashboards/Profile";
import Generalsetting from "./Dashboards/Settings";
import SingleVideo from "./landingpage/SingleVideo";
import YoutDashLayout from "./youtuber-Dash/youtuber components/YoutDashLayout";
import FirstPage from "./youtuber-Dash/youtuber components/FirstPage";
import HistoryPage from "./youtuber-Dash/youtuber components/HistoryPage";
import UploadVideo from "./youtuber-Dash/youtuber components/UploadVideo";
import Payment from "./youtuber-Dash/youtuber components/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signupform />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="video/:videoId" element={<SingleVideo />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route index path="home" element={<Home />} />
          <Route path="video" element={<Video />} />
          <Route path="balance" element={<Balance />} />
          <Route path="setting" element={<Settings />} />
        </Route>

        <Route path="superdashboard" element={<DashLayout />}>
          <Route index element={<DashHome />} />
          <Route path="users" element={<Users />} />
          <Route path="videos" element={<Videos />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="generalsetting" element={<Generalsetting />} />
        </Route>
        <Route path="/youtuberDash" element={<YoutDashLayout />}>
          <Route index element={<FirstPage />} />
          <Route path="upload" element={<UploadVideo />} />
          <Route path="payment" element={<Payment />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
