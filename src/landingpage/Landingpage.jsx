import { Outlet } from "react-router-dom"
import './Landing.css'
import Headeer from "./Headeer"
import Footer from "./Footer"
function Landingpage(){
    return(
        <div className="landing">
             <div>
                <Headeer/>
            </div>
            <div className="landing-outlet">
            <Outlet />
        </div>
        <div>
            <Footer/> 
           </div>
        </div>
    )
}
export default Landingpage