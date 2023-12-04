import React from 'react'
import "../youtStyles/FirstPage.css"
import DashCards from './DashCards'
function FirstPage() {
  return (
    <div className="initialDashPage">
      {/* <div className="display-Yout-Video">
        <div className="yout-Banner">banner
        
        </div>
        <div className="yout-Videos"> vedios</div>
      </div>
      <div className="display-Side-stats">
        <div className="yout-stats"> statistics</div>
        <div className="yout-summary">summary</div>
      
      </div> */}



      <div className="dash-highlight">
        <DashCards/>
        <DashCards/>
        <DashCards/>
        <DashCards/>
        <DashCards/>

      </div>
    </div>
  )
}

export default FirstPage