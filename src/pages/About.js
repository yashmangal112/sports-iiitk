function About() {
    return (
        <div>
            <div className="about">
                <div className="about1">
                    <img
                        className="aboutimg"
                        src={require("../images/About-1.png")}
                        alt="about-img"
                    ></img>
                </div>
                <div className="text">
                    {/* <div className="head">About The Club</div> */}
                    <div className="parrel">
                        <div className="head"></div>
                        <p className="text2">About the club</p>
                    </div>
                    <div className="desc">
                        The Sports Union is represented by The Sports Union
                        Council which consists of The Sports Secretary, three
                        Joint Sports Secretaries, the Captains of all Sports
                        Teams and one Ex-Office Member. The Sports Union Council
                        makes the final calls on matters such as sending teams
                        to outstation tournaments, decisions regarding IBOSM and
                        the like.
                    </div>
                    <div className="random">Random Staff</div>
                </div>
            </div>
            <div className="shadow2">
                <img
                    className="aboutimg"
                    src={require("../images/Ellipse 4.png")}
                    alt="about-img"
                ></img>
            </div>
        </div>
    );
}

export default About;
