import "../Event_info.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import img1 from '../images/carrom.jpg'
import img2 from '../images/img41.jpg'
import img3 from '../images/img42.jpg'
import img4 from '../images/img43.jpg'

function Event() {

    return (
        <>
            <Header />

            <div className="WRAPPER">
                <div className="HEADER1">
                    <h1>VARCHAS 2022 - IIIT Kota vs IIT Jodhpur</h1>
                    <p>VARCHAS annual sports fest of IIT Jodhpur</p>
                </div>

                <img src={img1} alt="main_img" className="main_img1" />
            </div>

            <div className="bottom">
                <p>“Varchas 2022” is the annual sports fest of IIT Jodhpur. Being the largest sports fest of Rajasthan, Varchas celebrates the spirit of sportsmanship and serves as a platform to showcase the countless hours of perspiration put in by the teams to achieve excellence in their sport. Since its inception in 2011 the grandeur of Varchas has spread far and wide across the best colleges of India. Varchas is an embodiment of the ideology and provides a platform to athletes to showcase their talent. More than 1200 participant from all over the country participated in the fest last season. Varchas witnessed a sensation among the youth. Apart from the spectacular athletic events, varchas witnessed an array of informal events.</p>
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
