import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineVideoSettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import '../watch/Sidebar.css'
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className=" sidebr">
            <div className="sidebar1">
                <Link to='home' className="sidebar-text">
            <AiOutlineHome/>
                
                    Home
                </Link>
                <Link to='video' className="sidebar-text">
                <MdOutlineVideoSettings />
                Videos
                </Link>
                <Link to='balance' className="sidebar-text">
                <GiMoneyStack />
            Balance
                </Link>
                <p className="sidebar-text">
                <BsCurrencyDollar />
            Earnings
                </p>
            </div>
            <div className="settings">

                <p className="sidebar-text">
            <AiOutlineHome/>
            Profile
                </p>
                <Link to='setting' className="sidebar-text">
                <IoSettingsOutline />
            Settings
                </Link>
            </div>
        </div>
    )
}

export default Sidebar