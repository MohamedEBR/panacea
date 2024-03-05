import {useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import './Header.scss'
import { images } from '../../constants';

const Header = () => {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setnav(true);
      } else {
        setnav(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    
    return (
        <header>
          <nav className={nav ? "nav active" : "nav"}>
            <Link to="/" className="logo">
              <img src={images.Logo} alt="" />
              
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="nav-icon"></span>
            </label>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/programs">Programs</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Header