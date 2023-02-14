function Header(){
    return (
        <div>
            <div className="header">
                <div className="list">
                    <ul>
                        <li className="headlist"><a href="/" className="button">HOME</a></li>
                        <li className="headlist"><a href="/about" className="button">ABOUT</a></li>
                        <li className="headlist"><a href="/team" className="button">TEAM</a></li>
                        <li className="headlist"><a href="event" className="button">EVENT</a></li>
                        <li className="headlist"><a href="contact" className="button">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <div className="logo">
                SPORTS
            </div>
        </div>
    );
}
export default Header;