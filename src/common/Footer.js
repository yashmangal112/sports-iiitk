function Footer(){
    return (
        <div className="footbar">
            <div className="footer">
                <div className="top">
                    <div className="left-side">
                        <div className="image"><img className="signature" src={require("../images/sign-logo.png")} alt="signature" /></div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                        <div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/team">Team</a></li>
                                <li><a href="/clubs">Clubs</a></li>
                                <li><a href="/event">Events</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="right-side">
                        <h3>ABOUT ME-</h3>
                        2nd year undergraduate at Indian Institute of Information Technology, Kota pursuing B.Tech in CSE Branch. My interest deeply revolves around Exploring, Learning and Thinking Data-Structutres & Algorithms Problems, designing web & App content, exploring Full Stack Web Development. I like to learn and help people in learning new technologies and working in communities.
                    </div>
                </div>
                <div className="icons">
                    <a href="https://github.com/RujulP14"><img className="icon" src={require("../images/github.png")} alt="github"></img></a>
                    <a href="https://www.instagram.com/rujul_09/"><img className="icon" src={require("../images/instagram.png")} alt="instagram"></img></a>
                    <a href="https://www.linkedin.com/in/rujul-dudhat/"><img className="icon" src={require("../images/linkedin.png")} alt="linkedin"></img></a>
                    <a href="https://www.youtube.com/"><img className="icon" src={require("../images/youtube.png")} alt="youtube"></img></a>
                    <a href="https://www.facebook.com/rujul.patel.121/"><img className="icon" src={require("../images/facebook.png")} alt="facebook"></img></a>
                </div>
                <div className="designed-by">
                    ♥ DESIGNED BY YASH MANGAL
                </div>
            </div>
        </div>
    );
}

export default Footer;