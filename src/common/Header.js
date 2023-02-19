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
                            <a href="#about" className="button">
                                ABOUT
                            </a>
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
                            <NavLink to="/gallery" className="button">
                                Gallery
                            </NavLink>
                        </li>
                        <li className="headlist">
                            <a href="#contact" className="button">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="logo">SPORTS</div>
        </div>
    );
}
export default Header;
