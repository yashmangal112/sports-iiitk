import "../Event_info.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import img1 from '../images/newone.jpeg'
import img2 from '../images/gaming.jpg'
import img3 from '../images/football.jpg'
import img4 from '../images/basketball.jpg'

function Event() {

    return (
        <>
            <Header />

            <div className="WRAPPER">
                <div className="HEADER1">
                    <h1>KHEL 2022 - Intra college sports tournament</h1>
                    <p>IIIT KOTA HEATS AND EVENT LEAGUE (KHEL)</p>
                </div>

                <img src={img1} alt="main_img" className="main_img1" />
            </div>

            <div className="bottom">
                <p>IIIT Kota Heats and Event League (KHEL) is the annual sports festival of the IIIT KOTA. This sports meet is a prominent showcase of sporting talents from inside the institute. KHEL is aimed to provide a platform to all the students of the institute to exhibit their true potential, promoting healthy competition. A total of 358 students participated in different events of 12 sports.</p>
                <div className="IMAGES">
                    <img src={img2} alt="" className="item1" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Event;
