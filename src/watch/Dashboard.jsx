import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import '../watch/Dashbord.css'
function Dashboard() {

  return (
    

    <div className=' dashboardss'>

      
         <div> 
      <Header/>  
      </div>  
      <div className='sidebar-outlettt'>
       <Sidebar />  
      <div className='outlettt'>
      <Outlet /> 
      </div>
      </div>
  
       
      
    
              
      
    </div>
  )
}

export default Dashboard