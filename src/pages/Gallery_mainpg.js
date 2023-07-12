import "../Gallery_mp.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import NewGallery from "./NewGallery";

function Gallery() {
    return (
        <div>
            <Header />
            <div className="tobehead">
                <div className="gallery-bg"></div>
                <div className="heading-gallery">
                    <p className="heading1">View Gallery</p>
                    <img
                        className="view-bg"
                        src={require("../images/View-Gallery.png")}
                        alt="#"
                    ></img>
                    <p className="content-gallery">
                        Taking part in sports is important as it reduces stress and enhances
                        mood. It builds healthy bones and muscles, increases fitness,
                        improves sleep, helps people socialize, improves cooperation skills
                        and team spirit, boosts self confidence and lowers the risk of
                        getting obese.
                    </p>
                </div>
                <div className="rectangle-left"></div>
                <div className="rectangle-right"></div>
                {/* <Carousel infiniteLoop autoPlay className="GAL_CAROUSEL" >
                    <div className="image">
                        <img src={require("../images/Rectangle 8.png")} alt="#"/>
                    </div>
                    <div className="image">
                        <img src={require("../images/Rectangle 10.png")} alt="#"/>
                    </div>
                    <div className="image">
                        <img src={require("../images/Rectangle 17.png")} alt="#"/>
                    </div>
                    <div className="image">
                        <img src={require("../images/Rectangle 11.png")} alt="#"/>
                    </div>
                    <div className="image">
                        <img src={require("../images/Rectangle 17.png")} alt="#"/>
                    </div>
                </Carousel> */}

                <div style={{ marginTop: "5rem" }}>
                    <NewGallery />
                </div>



            </div>
            <Footer />
        </div>
    );
}

export default Gallery;
