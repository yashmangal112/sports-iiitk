import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import About from "../pages/About";
import Contact from "../pages/Contact";
function Home() {
    return (
        <div>
            <Header />
            <div className="bg-image-home">
            <div className="page">
                <div className="main">
                    <h1>From Zero To Sports Hero</h1>
                    we focus on enable we focus on enable we focus on enable we
                    focus on enable we focus on enable we focus on enable we
                    focus on enable we focus on enable we focus on enable we
                    focus on enable
                </div>
            </div>
            </div>
            <img id="arrow"
                    src={require("../images/arrow.png")}
                    alt="img1"
                ></img>
            <div id="about" className="photos">
            
                <img
                    src={require("../images/Rectangle 8.png")}
                    alt="img1"
                ></img>
                <img
                    src={require("../images/Rectangle 17.png")}
                    alt="img2"
                ></img>
                <img
                    src={require("../images/Rectangle 11.png")}
                    alt="img3"
                ></img>
            </div>
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
