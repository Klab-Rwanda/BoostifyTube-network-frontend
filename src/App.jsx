import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./watch/Dashboard";
import Video from "./watch/Video";
import Balance from "./watch/Balance";
import Singlevideo from "./watch/Singlevideo";
import Landingpage from "./landingpage/Landingpage";
import Signupform from "./landingpage/Signupform";
import Login from "./landingpage/Login";
import Contacts from "./landingpage/Contacts";
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
import YoutDashLayout from "./youtuber-Dash/youtuber components/YoutDashLayout";
import FirstPage from "./youtuber-Dash/youtuber components/FirstPage";
import HistoryPage from "./youtuber-Dash/youtuber components/HistoryPage";
import UploadVideo from "./youtuber-Dash/youtuber components/UploadVideo";
import Payment from "./youtuber-Dash/youtuber components/Payment";
import YoutuberTransactions from "./Dashboards/YoutuberTransactions";
import ViewerTransactions from "./Dashboards/ViewerTransactions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContext } from "./context/Context";
import Cashin from "./Dashboards/CashIn";
import Cashout from "./Dashboards/CashOut";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage />}>
              <Route index element={<Home />} />
              <Route path="contactus" element={<Contacts />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signupform />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route index path="home" element={<Home />} />
              <Route path="video" element={<Video />} />
              <Route path="balance" element={<Balance />} />
              <Route path="setting" element={<Settings />} />

              <Route path="video/:videoId" element={<Singlevideo />} />
            </Route>

            <Route path="/superdashboard" element={<DashLayout />}>
              <Route index element={<DashHome />} />
              <Route path="users" element={<Users />} />
              <Route path="videos" element={<Videos />} />

              <Route path="transactions">
                <Route path="youtuber" element={<YoutuberTransactions />} />
                <Route path="viewer" element={<ViewerTransactions />} />
              </Route>

              <Route path="earnings">
                <Route path="cashin" element={<Cashin />} />
                <Route path="cashout" element={<Cashout />} />
              </Route>
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
      </AppContext>
    </QueryClientProvider>
  );
}

export default App;
