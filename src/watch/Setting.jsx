import './Setting.css'
import { FaExchangeAlt ,FaPhone,FaUserEdit } from "react-icons/fa"; 
import { MdOutlineMailOutline,MdOutlineDarkMode } from "react-icons/md";
import imgad from '../images/profile.jpg'
const Settings=()=>{
    return(
        <div className='setting'>
<div className='setting-parag'>
<div className='setting-detail'>
<div className='setting-d' >
    <b>
    Language Settings
    </b>
    <p> English </p>
    <p className='setting-details'>Change Language <p><FaExchangeAlt /></p></p>
</div>
<div className='setting-d'>
    <b>Profile Settings</b>
    <p className='setting-details'><p><FaPhone /></p>+250 -  78- 76153133</p>
    <p className='setting-details'><p><MdOutlineMailOutline /></p>izanyibukayvette@gmail.com</p>
    
</div>

</div>

<div className='setting-detail'>
    <div className='setting-details'>
    <p>Change  mode:</p>
    <MdOutlineDarkMode />
    </div>
    <div className='setting-d'>
        <b>Payment Settings</b>
        <p>Payment Means:MoMo</p>
    </div>
   
   
</div>
<div className='setting-d'>
<b>Logout Option</b>
<button className='setting-button'>Logout</button>
    </div>

</div>
<div >
    <img src={imgad} className='setting-imag'/>
    <div className='profile-icons'>
    <FaUserEdit  className='profile-icon'/>
    <h6>Edit Profile</h6>
    </div>
</div>
        </div>
    )
} ;
export default Settings