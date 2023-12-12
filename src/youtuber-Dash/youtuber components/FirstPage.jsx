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


     
      <div>
        <h1 >My Uploaded Videos</h1>
      </div>
      <div className="youtuber-video-card">
        {/* <CardMain title={"Cubic Thunder"} hearts={"65"} /> */}
        <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
        <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
        <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
        <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
        <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
        <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
        <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
        <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
        <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />



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