import "../Team.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import TeamCard from "./Team-card.js";
import Akshat from '../images/AkshatBoss-modified.png'
import Latika from '../images/LakshitaBoss-modified.png'
import Rakshit from '../images/RakshitBoss-modified.png'
import Atharv from '../images/AtharvBoss-modified.png'
import Devika from '../images/Devika-modified.png'
import Soham from '../images/Soham-modified.png'
import TEAM from '../images/TEAM.JPG'
import Carousel from './Carousel'


function Team() {
    return (
        <div>
            <Header />
            <div className="heading">
                <p>SPORTS COMMITTEE</p>
            </div>
            <div>
                <img src={TEAM} alt="TEAM" className="team_photo" />
            </div>
            <div className="container">
                <div className="flex-container">
                    <TeamCard
                        img={Akshat}
                        name="Akshat Barua"
                        bio="Sports Captain"
                        insta="https://www.instagram.com/_akfat/"
                        linkedin="https://www.linkedin.com/in/akshat-barua-8a0934209/"
                        style={{ display: "none" }} // Set the style to display:none
                        className=""
                    />
                    <TeamCard
                        img={Latika}
                        name="Latika Aggarwal"
                        bio="Vice Captain"
                        insta="https://instagram.com/_latika_2301?igshid=MzNlNGNkZWQ4Mg=="
                        linkedin="https://www.linkedin.com/in/latika-aggarwal-350584207/"
                        style={{ display: "none" }} // Set the style to display:none
                        className=""
                    />
                    <TeamCard
                        img={Atharv}
                        name="Atharav Bhadale"
                        bio="Sports Secretary"
                        insta="https://instagram.com/a16arva.b_?igshid=MzNlNGNkZWQ4Mg=="
                        linkedin="https://www.linkedin.com/in/atharva-bhadale-752691226"
                        style={{ display: "none" }} // Set the style to display:none
                        className=""
                    />
                    <TeamCard
                        img={Rakshit}
                        name="Rakshit Gupta"
                        bio="Technical lead"
                        insta="https://www.instagram.com/rakshitgupta2812/"
                        linkedin="https://www.linkedin.com/in/rakshitgupta0"
                        style={{ display: "none" }} // Set the style to display:none
                        className=""
                    />
                    <TeamCard
                        img={Devika}
                        name="Devika Badekar"
                        bio="Girls Joint Secretary"
                        insta="https://www.instagram.com/jazzpretendinnn/"
                        linkedin="https://www.linkedin.com/in/devika-badekar-b92353272"
                        style={{ display: "none" }} // Set the style to display:none
                        className=""
                    />
                    <TeamCard
                        img={Soham}
                        name="Soham Chate"
                        bio="Boys Joint Secretary"
                        insta="https://instagram.com/soham_chate_official?igshid=MmIzYWVlNDQ5Yg"
                        linkedin="https://www.linkedin.com/in/soham-chate-08b67625a"
                        style={{ display: "none" }} // Set the style to display:none
                        className=""
                    />

                </div>
                <div className="heading">
                    <p>TECHNICAL TEAM</p>
                </div>
                <div className="DEVS"><Carousel></Carousel></div>
            </div>

            <Footer />
        </div>
    );
}

export default Team;
