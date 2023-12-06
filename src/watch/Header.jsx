import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import '../watch/Header.css'

 function Header(){
    const handleLogout=()=>{
        localStorage.removeItem('loggedUser')
        window.location.href = '/'
      }

      // const { videos}= MyContext();
      // const[search,setSearch]= useState();

 
   
      // const filterproduct = videos.filter(item =>
      //   Object.values(item).some(value =>
      //     value.toLowerCase().includes(search.toLowerCase())
      //   )
      // );



    return(
        <div className=" header-text"> 
            <div className=" header-text1">
            <div className='watch-user-logo'><b>O </b><b className='watch-g'>G</b></div>
            <b>$1000</b>
            </div>

            <div className=" header-text2">
            <input type="text" placeholder="search"
           
            >
            
            </input>
            <IoMdNotificationsOutline  className="dash-heard"/>
            <button className="header-button" onClick={handleLogout}> Logout</button>
            </div>
        </div>
    )
 }
 export  default Header
