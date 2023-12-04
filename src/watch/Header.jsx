import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import '../watch/Header.css'
 function Header(){
    return(
        <div className=" header-text"> 
            <div className=" header-text1">
            <div className='watch-user-logo'><b>O </b><b className='watch-g'>G</b></div>
            <b>$1000</b>
            </div>

            <div className=" header-text2">
            <input type="text" placeholder="search" >
            
            </input>
            <IoMdNotificationsOutline  className="dash-heard"/>
            <button className="header-button"> Logout</button>
            </div>
        </div>
    )
 }
 export default Header