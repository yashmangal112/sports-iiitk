import "../Event_info.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import img21 from '../images/cric.jpg'
import img22 from '../images/img21.jpg'
import img23 from '../images/img22.jpg'
import img24 from '../images/img23.jpg'

function Event() {

    return (
        <>
            <Header />

            <div className="WRAPPER">
                <div className="HEADER1">
                    <h1>BOSM 2022 - IIIT Kota vs BITS Pilani</h1>
                    <p>BITS Open Sports Meet (BOSM)</p>
                </div>

                <img src={img21} alt="main_img" className="main_img1" />
            </div>

            <div className="bottom">
                <p>BITS Open Sports Meet (BOSM) is the annual sports festival of Birla Institute of Technology and Science, Pilani campus.[1][2] This sports meet, usually held around mid-September is a prominent showcase of sporting talents from around the country and abroad too. One of the largest student managed Sports fests of the country, BOSM is aimed to provide a platform to colleges from all over India to exhibit their true potential, promoting healthy competition. </p>
                <div className="IMAGES">
                    <img src={img22} alt="" className="item1" />
                    <img src={img23} alt="" />
                    <img src={img24} alt="" />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Event;
