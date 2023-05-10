import "../Team.css";
// import TeamCard from "../pages/Team-card.js";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import TeamCard from "./Team-card.js";

function Team() {
    return (
        <div>
            <Header/>
            <div className="heading">
                <p>OUR TEAM</p>
            </div>
            <div className="container">
                <div className="flex-container">
                    <TeamCard
                        name="YASH MANGAL"
                        bio="2nd year undergraduate at Indian Institute of Information Technology"
                        twitter="https://twitter.com"
                        insta="https://ig.me"
                        fb="https://fb.com"
                        linkedin="https://linked.in"
                        pfplink="https://satya.devh.in/assets/images/logo-icon.png"
                        style={{display: "none"}} // Set the style to display:none
                        className=""
                    />
                    {}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Team;
