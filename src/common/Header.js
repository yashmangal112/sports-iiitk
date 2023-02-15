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
        </div>
      </div>
      <div className="logo">SPORTS</div>
    </div>
  );
}
export default Header;
