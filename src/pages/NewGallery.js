/* eslint-disable react/jsx-no-target-blank */
import { useMediaQuery } from "react-responsive";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/football.jpg'
import img2 from '../images/img23.jpg'
import img3 from '../images/img33.jpg'
import img4 from '../images/img41.jpg'
import img5 from '../images/img24.jpg'
import img6 from '../images/img34.jpg'
import img7 from '../images/img25.jpg'
import img8 from '../images/img35.jpg'
import img9 from '../images/img44.jpg'
import img10 from '../images/img21.jpg'
import img11 from '../images/img42.jpg'
import img12 from '../images/img43.jpg'

function UncontrolledExample() {

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 767 })
        return isDesktop ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }


    return (
        <>

            <Mobile>
                <Carousel className='CAROUSEL' style={{
                    height: "500px", width: "300px", background: "#0c142c", border: "4px solid #7cdacc", boxShadow: " 0 6px 10px rgba(207, 212, 222, 1)", borderRadius: "10px", padding: "2rem", transform: "translateX(50px)",
                }}>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", transform: "translate(15px)" }}>
                                <img src={img1} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img5} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img6} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1rem", marginBottom: "0px", textAlign: "center", fontSize: "22px" }}>KHEL - 2022</p>
                            <button style={{ background: "#7cdacc", transform: "translate(62px)", outline: "none", border: "none", width: "100px", color: "#00040f", borderRadius: "4px", padding: "0.25rem 0.125rem", textAlign: "center", fontSize: "15px" }}><a href="/Gall_Page1" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", transform: "translate(15px)" }}>
                                <img src={img2} alt="Rakshit Gupta" style={{ width: "200px", height: "100px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img7} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img8} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1rem", marginBottom: "0px", textAlign: "center", fontSize: "22px" }}>KHEL - 2022</p>
                            <button style={{ background: "#7cdacc", transform: "translate(62px)", outline: "none", border: "none", width: "100px", color: "#00040f", borderRadius: "4px", padding: "0.25rem 0.125rem", textAlign: "center", fontSize: "15px" }}><a href="/Gall_Page2" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", transform: "translate(15px)" }}>
                                <img src={img3} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img9} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img10} alt="Rakshit Gupta" style={{ width: "200px", height: "100px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1rem", marginBottom: "0px", textAlign: "center", fontSize: "22px" }}>KHEL - 2022</p>
                            <button style={{ background: "#7cdacc", transform: "translate(62px)", outline: "none", border: "none", width: "100px", color: "#00040f", borderRadius: "4px", padding: "0.25rem 0.125rem", textAlign: "center", fontSize: "15px" }}><a href="/Gall_Page3" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", transform: "translate(15px)" }}>
                                <img src={img4} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img11} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img12} alt="Rakshit Gupta" style={{ width: "200px", borderRadius: "10px", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1rem", marginBottom: "0px", textAlign: "center", fontSize: "22px" }}>KHEL - 2022</p>
                            <button style={{ background: "#7cdacc", transform: "translate(62px)", outline: "none", border: "none", width: "100px", color: "#00040f", borderRadius: "4px", padding: "0.25rem 0.125rem", textAlign: "center", fontSize: "15px" }}><a href="/Gall_Page4" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                </Carousel >
            </Mobile>



            <Desktop>
                <Carousel className='CAROUSEL' style={{
                    height: "600px", width: "80%", background: "#0c142c", border: "4px solid #7cdacc", boxShadow: " 0 6px 10px rgba(207, 212, 222, 1)", borderRadius: "10px", padding: "2rem", transform: "translateX(120px)",
                }}>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >
                        <div className="gal_wrapper" style={{ display: "flex", flexDirection: "column" }}>
                            <img src={img1} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", marginLeft: "5.2rem", transform: "translateX(191px)", border: "4px solid #7cdacc", padding: 0 }} />
                            <div style={{ display: "flex", gap: "10px", marginTop: "2rem" }}>
                                <img src={img5} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", transform: "translateX(68px)", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img6} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", transform: "translateX(111px)", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1.5rem", textAlign: "center", fontSize: "22px" }}>KHEL - 2022</p>
                            <button style={{ transform: "translate(378px,15px)", background: "#7cdacc", outline: "none", border: "none", width: "150px", color: "#00040f", borderRadius: "4px", padding: "0.5rem 0.25rem", textAlign: "center", fontSize: "15px" }}><a href="/Gall_Page1" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={img2} alt="Rakshit Gupta" style={{ width: "350px", height: "180px", borderRadius: "10px", marginLeft: "5.2rem", transform: "translateX(191px)", border: "4px solid #7cdacc", padding: 0 }} />
                            <div style={{ display: "flex", gap: "10px", marginTop: "2rem" }}>
                                <img src={img7} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", transform: "translateX(68px)", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img8} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", transform: "translateX(111px)", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1.5rem",  textAlign: "center", fontSize: "22px" }}>BOSM - 2022</p>
                            <button style={{ transform: "translate(378px,0px)", background: "#7cdacc", outline: "none", border: "none", width: "150px", color: "#00040f", borderRadius: "4px", padding: "0.5rem 0.25rem", textAlign: "center", fontSize: "15px" }}><a href="/Gall_Page2" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={img3} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", marginLeft: "5.2rem", transform: "translateX(191px)", border: "4px solid #7cdacc", padding: 0 }} />
                            <div style={{ display: "flex", gap: "10px", marginTop: "2rem" }}>
                                <img src={img9} alt="Rakshit Gupta" style={{ width: "350px", height: "200px", borderRadius: "10px", transform: "translateX(68px)", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img10} alt="Rakshit Gupta" style={{ width: "350px", height: "200px", borderRadius: "10px", transform: "translateX(111px)", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1.5rem", textAlign: "center", fontSize: "22px" }}>MST - 2022</p>
                            <button style={{ transform: "translate(375px,0px)", background: "#7cdacc", outline: "none", border: "none", width: "150px", color: "#00040f", borderRadius: "4px", padding: "0.5rem 0.25rem", textAlign: "center", fontSize: "15px" }}> <a href="/Gall_Page3" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={img4} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", marginLeft: "5.2rem", transform: "translateX(191px)", border: "4px solid #7cdacc", padding: 0 }} />
                            <div style={{ display: "flex", gap: "10px", marginTop: "2rem" }}>
                                <img src={img11} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", transform: "translateX(68px)", border: "4px solid #7cdacc", padding: 0 }} />
                                <img src={img12} alt="Rakshit Gupta" style={{ width: "350px", borderRadius: "10px", transform: "translateX(111px)", border: "4px solid #7cdacc", padding: 0 }} />
                            </div>
                            <p style={{ color: "white", margin: "1.5rem", textAlign: "center", fontSize: "22px" }}>VARCHAS - 2022</p>
                            <button style={{ transform: "translate(375px,15px)", background: "#7cdacc", outline: "none", border: "none", width: "150px", color: "#00040f", borderRadius: "4px", padding: "0.5rem 0.25rem", textAlign: "center", fontSize: "15px" }}><a href="/Gall_Page4" style={{ color: "#00040f" }}>View More</a></button>
                        </div>
                    </Carousel.Item>
                </Carousel >
            </Desktop ></>

    );
}

export default UncontrolledExample;