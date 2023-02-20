import "../Event.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import image1 from "../images/random.jpg";
import EventCard from "../pages/Event-card.js";
function Event() {
    return (
        <div>
            <Header />
            <div className="event">
                <div className="bg-image"></div>
                <div className="title">
                    <p>Events</p>
                </div>
                <div className="navbar">
                    <ul>
                        <li className="navlist">
                            <a href="#">ALL</a>
                        </li>
                        <li className="navlist">
                            <a href="#">BOSM</a>
                        </li>
                        <li className="navlist">
                            <a href="#">IIIT KOTA</a>
                        </li>
                        <li className="navlist">
                            <a href="#">BITS</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container1">
                <EventCard
                    image={image1}
                    subtitle={"Khel 2022- Intra College Sports Tournament"}
                    detail={"365 students and 12 sports"}
                    date={"Date of Event:21.09.2010"}
                />
                <EventCard
                    image={image1}
                    subtitle={"Khel 2022- Intra College Sports Tournament"}
                    detail={"365 students and 13 sports"}
                    date={"Date of Event:21.09.2010"}
                />
                <EventCard
                    image={image1}
                    subtitle={"Khel 2022- Intra College Sports Tournament"}
                    detail={"365 students and 14 sports"}
                    date={"Date of Event:21.09.2010"}
                />
            </div>
            <div className="container2">
                <div className="center">
                    <EventCard
                        image={image1}
                        subtitle={"Khel 2022- Intra College Sports Tournament"}
                        detail={"366 students and 10 sports"}
                        date={"Date of Event:21.09.2010"}
                    />
                </div>
            </div>
            <div className="empty"></div>
            <Footer />
        </div>
    );
}

export default Event;
