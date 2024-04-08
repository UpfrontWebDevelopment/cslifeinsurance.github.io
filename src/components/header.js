import '../index.css';
import logo from "../images/20230701_104534.jpg"

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <img src={logo} alt=""/>
      </div>
      <div className="headerRight">
        <p>My socials / contact</p>
      </div>
    </div>
  );
}

export default Header;
