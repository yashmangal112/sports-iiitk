import "../Gallery_mp.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
function Gallery() {
  return (
    <div>
      <Header />
      <div>
        <div className="gallery-bg"></div>
        <div className="heading-gallery">
                <p className="heading1">View Gallery</p>
                <img className="view-bg" src={require("../images/View-Gallery.png")} alt="#"></img>
                <p className="content-gallery">Taking part in sports is important as it reduces stress and enhances mood. It builds healthy bones and muscles, increases fitness, improves sleep, helps people socialize, improves cooperation skills and team spirit, boosts self confidence and lowers the risk of getting obese.</p>
            </div>
      </div>
    </div>
  );
}

export default Gallery;
