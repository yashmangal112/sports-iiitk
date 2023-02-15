import "../Team.css";
import TeamCard from "../pages/Team-card.js";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import image from "../images/demo-team.jpg";
function Team() {
    return (
        <div>
            <Header />
            <div className="bg-image-team"></div>
            <div className="heading">
                <p>OUR TEAM</p>
            </div>
            <div className="container">
                <div className="flex-container">
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                    <TeamCard
                        image={image}
                        name="Yash Mangal"
                        post="Sports Secretary"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Team;
