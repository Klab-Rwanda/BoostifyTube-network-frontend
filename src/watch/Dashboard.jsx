import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import '../watch/Dashbord.css'
function Dashboard() {

  return (
    <div className=' dashboardviewer'>
      
         <div className=' sidebar'> 
      <Header/>  
      </div>  
      <div className='sidebar-outlet'>
       <Sidebar />  
      <div className='outlet'>
      <Outlet /> 
      </div>
      </div>
  
       
      
    
              
      
    </div>
  )
}

export default Dashboard