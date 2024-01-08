import '../watch/Header.css'
import { IoMenu } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import Esearch from "./Esearch";
import { MyContext } from '../context/Context';


function Header() {
   const { loggedUser } = MyContext();
   
     const [modal,setModal]=useState();
     function openModal(){
      setModal(!modal)
    }
      // const { videos}= MyContext();
      // const[search,setSearch]= useState();

 
   
      // const filterproduct = videos.filter(item =>
      //   Object.values(item).some(value =>
      //     value.toLowerCase().includes(search.toLowerCase())
      //   )
      // );



    return (
      <div className=" header-textt">
        {modal && <Esearch openModal={openModal} />}
        <div className=" header-text1">
          <div className="watch-user-logo">
            <b>O </b>
            <b className="watch-g">G</b>
          </div>
          <IoMenu onClick={openModal} className="header-search" />
          <p>$1000</p>
        </div>

        <div className='header-viewrs'>
          <IoMdNotifications className="not-icondd" />
          <HiOutlineMail className="not-icondd" />
          <div className="pic">
            <img
              src={loggedUser?.user.image}
              alt=""
              style={{
                width: "90%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    );
 }
 export  default Header
