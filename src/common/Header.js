<<<<<<< HEAD
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="list">
          <ul>
            <li className="headlist">
              <NavLink to="/" className="button">
                HOME
              </NavLink>
            </li>
            <li className="headlist">
              <NavLink to="/about" className="button">
                ABOUT
              </NavLink>
            </li>
            <li className="headlist">
              <NavLink to="/team" className="button">
                TEAM
              </NavLink>
            </li>
            <li className="headlist">
              <NavLink to="/event" className="button">
                EVENT
              </NavLink>
            </li>
            <li className="headlist">
              <NavLink to="/contact" className="button">
                CONTACT
              </NavLink>
            </li>
          </ul>
=======
function Header() {
    return (
        <div>
            <div className="header">
                <div className="list">
                    <ul>
                        <li className="headlist">
                            <a href="/" className="button">
                                HOME
                            </a>
                        </li>
                        <li className="headlist">
                            <a href="/about" className="button">
                                ABOUT
                            </a>
                        </li>
                        <li className="headlist">
                            <a href="/team" className="button">
                                TEAM
                            </a>
                        </li>
                        <li className="headlist">
                            <a href="event" className="button">
                                EVENT
                            </a>
                        </li>
                        <li className="headlist">
                            <a href="contact" className="button">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="logo">SPORTS</div>
>>>>>>> c5e91db9af0af1f98f0128cf74f5a81456b1a619
        </div>
      </div>
      <div className="logo">SPORTS</div>
    </div>
  );
}
export default Header;
