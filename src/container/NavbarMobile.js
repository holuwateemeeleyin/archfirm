import "./NavbarMobile.css"
import { AiOutlineMenu } from 'react-icons/ai';

function NavbarMobile() {
    return <div className="navbarmobile__container-parent ">

   <div className="navbarmobile__container section-margin__left section-margin__right">
      <div className="navbar__container-logo">
          ArchModern
      </div>
      <div className="navbar__container-menu">
          <AiOutlineMenu size={25}/>
          {/* X */}
      </div>
      </div>
  </div>;
}

export default NavbarMobile;
