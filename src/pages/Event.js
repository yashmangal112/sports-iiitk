import "../Event.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import image1 from "../images/random.png";
import EventCard from "../pages/Event-card.js";
import { useMediaQuery } from "react-responsive";

function Event() {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 767 })
        return isDesktop ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    return (
        <div>
            <Header />
            <div className="event">
                <div className="bg-image"></div>
                <div className="title">
                    <p>Events</p>
                </div>
                <div className="navbar">
                    <ul className="NAVLINKS">
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


            <Mobile>
                <div className="container1">
                    {/*NOTE: Use transparent (png) and Image with same dimensions as src/images/random.png*/}
                    <EventCard
                        image={image1}
                        href_value="/Event_Info"
                        subtitle={"Khel 2022- Intra College Sports Tournament"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}
                    /><EventCard
                        image={image1}
                        href_value="/Event_Info2"
                        subtitle={"BOSM 2022 - IIIT Kota vs BITS Pilani"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}
                    /><EventCard
                        image={image1}
                        href_value="/Event_Info3"
                        subtitle={"MST 2022- IIIT Kota vs MNIT"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}
                    /><EventCard
                        image={image1}
                        href_value="/Event_Info4"
                        subtitle={"VARCHAS 2022- IIIT Kota vs IIT Jodhpur"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}

                    />
                </div>
            </Mobile>
            <Desktop>
                <div className="container1">
                    {/*NOTE: Use transparent (png) and Image with same dimensions as src/images/random.png*/}
                    <EventCard
                        image={image1}
                        href_value="/Event_Info"
                        subtitle={"Khel 2022- Intra College Sports Tournament"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}
                    /><EventCard
                        image={image1}
                        href_value="/Event_Info2"
                        subtitle={"BOSM 2022 - IIIT Kota vs BITS Pilani"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}
                    />
                </div>

                <div className="container1">

                    <EventCard
                        image={image1}
                        href_value="/Event_Info3"
                        subtitle={"MST 2022- IIIT Kota vs MNIT"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}
                    /><EventCard
                        image={image1}
                        href_value="/Event_Info4"
                        subtitle={"VARCHAS 2022- IIIT Kota vs IIT Jodhpur"}
                        detail={"365 students and 14 sports"}
                        date={"Date of Event:21.09.2010"}
                    />
                </div>
            </Desktop>


            <div className="empty"></div>
            <Footer />
        </div>
    );
}

export default Event;
