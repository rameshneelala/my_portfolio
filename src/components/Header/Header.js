import "./index.css";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="header-logo-name">
        <h4 className="name-logo">Neelala Ramesh</h4>
      </Link>

      <nav>
        <ul className="nav-list">
          <Link to="/" className="nav">
            <li className="nav-items">
              <AiOutlineHome className="icon" />
              <span>Home</span>
            </li>
          </Link>

          <Link to="/about" className="nav">
            <li className="nav-items">
              <AiOutlineUser className="icon" />
              <span>About</span>
            </li>
          </Link>

          <Link to="/projects" className="nav">
            <li className="nav-items">
              <AiOutlineFundProjectionScreen className="icon" />
              <span>Projects</span>
            </li>
          </Link>

          <Link to="/contact" className="nav">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
