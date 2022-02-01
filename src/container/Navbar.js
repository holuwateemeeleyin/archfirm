import './Navbar.css'
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { AiFillHome } from 'react-icons/ai';

function Navbar() {
  return <div className="navbar__container-parent  ">
  
  <div className="navbar__container section-margin__left section-margin__right">
      <div className="navbar__container-logo">
        <FcHome size={40} color='green'/>
        {/* <AiFillHome size={40} color='black'/> */}
        <h3>
        ArchModern
        </h3>

      </div>
     
     
      <div className="navbar__container-link">
        {/* <a>Home</a>
        <a>Home</a>
        <a>Home</a> */}
        <Link to="/home">Home</Link>
        <Link to="/home">About</Link>
        <Link to="/home">Contact Us</Link>

      </div>

      </div>
  </div>

  ;
}

export default Navbar;
