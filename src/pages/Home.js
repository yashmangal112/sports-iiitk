import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import About from "../pages/About";
import Contact from "../pages/Contact";
import {useMediaQuery} from 'react-responsive';
import LazyLoad from 'react-lazyload';

function Home() {
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 767})
        return isDesktop ? children : null
    }
    const Mobile = ({ children}) => {
        const isMobile = useMediaQuery({maxWidth: 767})
        return isMobile ? children : null
    }
    return (
        <div>
            <Header />
            <Mobile>
                <div className="mobile-container">
                    <div className="bg-image-home">
                        <div className="page">
                            <p>{" "}</p>
                            <h2>
                                From Zero To Sports Hero
                            </h2>
                            <p>
                                The sports club of IIIT Kota is a vibrant and dynamic organization that caters to the athletic needs and interests of the student community. With a wide range of sports activities and facilities, the club provides ample opportunities for students to engage in physical fitness, skill development, and friendly competition. The dedicated team of sports enthusiasts work tirelessly to organize regular tournaments, practice sessions, and inter-college events, fostering a healthy sports culture on campus.
                            </p>
                        </div>
                    </div>

                    <div id="about" className="photos">
                        <LazyLoad>
                            <img
                                src={require("../images/Rectangle 8.png")}
                                alt="img1"
                            ></img></LazyLoad>
                        <LazyLoad>
                            <img
                                src={require("../images/Rectangle 17.png")}
                                alt="img2"
                            ></img></LazyLoad>
                        <LazyLoad>
                            <img
                                src={require("../images/Rectangle 11.png")}
                                alt="img3"
                            ></img></LazyLoad>
                    </div>
                    <About />
                    <Contact />
                    <Footer />
                </div>
            </Mobile>
            <Desktop>
                <div className="bg-image-home">
                    <div className="page">
                        <div className="main">
                            <h1>From Zero to Sports Hero</h1>
                            <p>The sports club of IIIT Kota is a vibrant and dynamic organization that caters to the athletic needs and interests of the student community. With a wide range of sports activities and facilities, the club provides ample opportunities for students to engage in physical fitness, skill development, and friendly competition. The dedicated team of sports enthusiasts work tirelessly to organize regular tournaments, practice sessions, and inter-college events, fostering a healthy sports culture on campus.</p>
                        </div>
                    </div>
                </div>

                <About />
                <Contact />
                <Footer />
            </Desktop>
        </div>

    );
}

export default Home;
