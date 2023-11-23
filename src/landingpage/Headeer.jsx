import'./Headeer.css'
function Headeer(){
    return(
        <div className="headeer "> 
         
       <div className='headeer-logo'>
      <div className='watch-logo'><b>O </b><b className='watch-g'>G</b></div>
      <input type='text' name='search'placeholder='search' className='search-button'/>
       </div>
        
        <div className="header-buttonn">
        
        <button className="heade-button"> Contacts</button>
        <button className="heade-button"> FAQs</button>
        <button className="heade-button"> Logout</button>   
        </div>
        
    </div>
    )
} export default Headeer