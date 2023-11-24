import'./Headeer.css'
import { Link } from 'react-router-dom';
function Headeer(){
    return (
      <div className="headeer ">
        <div className="headeer-logo">
          <div className="watch-logo">
            <b>O </b>
            <b className="watch-g">G</b>
          </div>
          <input
            type="text"
            name="search"
            placeholder="search"
            className="search-button"
          />
        </div>

        <div className="header-buttonn">
          <button className="heade-button"> Contacts</button>
          <button className="heade-button"> FAQs</button>
          <Link to= "/signup">
            <button className="heade-button"> Login</button>
          </Link>
        </div>
      </div>
    );
} export default Headeer