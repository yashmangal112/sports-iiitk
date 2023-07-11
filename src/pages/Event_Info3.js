import "../Event_info.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import img1 from '../images/BASKETjpeg.jpeg'
import img2 from '../images/img31.jpg'
import img3 from '../images/img32.jpg'
import img4 from '../images/img33.jpg'

function Event() {

    return (
        <>
            <Header />

            <div className="WRAPPER">
                <div className="HEADER1">
                    <h1>MST 2023 - IIIT Kota vs MNIT</h1>
                    <p>Malaviya Sports Tournament (MST)</p>
                </div>

                <img src={img1} alt="main_img" className="main_img1" />
            </div>

            <div className="bottom">
                <p>The MNIT Sports Tournament (MST), one of Rajasthan's largest sporting events, began in 2007. About 300 people from 12 different institutes took part in its first edition. 30+ Institutions MST has expanded significantly over the years, with both the number of participants and institutes growing rapidly. 23rd - 25th March 2023 MST'23 promises to enthrall its audience and will definitely live up to its hype and expectations </p>
                <div className="IMAGES">
                    <img src={img2} alt="img1" className="item1" />
                    <img src={img3} alt="img2" />
                    <img src={img4} alt="img3" />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Event;
