/* eslint-disable react/jsx-no-target-blank */
import Carousel from 'react-bootstrap/Carousel';
import Rakshit from '../images/RakshitBoss-modified.png'
import Shreyansh from '../images/ShreyanshBoss-fotor-2023062619931.png'
import Dhairya from '../images/DhairyaNew.png'
import Rujul from '../images/RujulBoss-fotor-20230626192810.png'
import Satya from '../images/satya-fotor-20230626202211.png'
import { useMediaQuery } from "react-responsive";


import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'


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
                    height: "400px", width: "250px", background: "#0c142c", border: "4px solid #7cdacc", boxShadow: " 0 6px 10px rgba(207, 212, 222, 1)", borderRadius: "10px", padding: "2rem", transform: "translateX(-30px)",
                }}>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Rakshit} alt="Rakshit Gupta" style={{ width: "100px", marginLeft: "5.2rem", transform: "translateX(-45px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginTop: "1rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Rakshit Gupta</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px", marginBottom: 0 }}>IIIT Kota <br />2022 - 2025</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="http://GitHub.com/rakshit2812" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/rakshitgupta0" target='_blank' style={{ color: "white", fontSize: "20px" }} rel="noreferrer"><SiLinkedin /></a>
                            <a href="https://www.instagram.com/rakshitgupta2812/" target='_blank' style={{ color: "white", fontSize: "20px" }} rel="noreferrer"><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Rujul} alt="Rakshit Gupta" style={{ width: "100px", marginLeft: "5.2rem", transform: "translateX(-45px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginTop: "1rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Rujul Dudhat</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px", marginBottom: 0 }}>IIIT Kota <br />2022 - 2025</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/RujulP14" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/rujul-dudhat" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiLinkedin /></a>
                            <a href="https://instagram.com/rujul_09" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Shreyansh} alt="Rakshit Gupta" style={{ width: "100px", marginLeft: "5.2rem", transform: "translateX(-45px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginTop: "1rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Shreyansh Jain</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px", marginBottom: 0 }}>IIIT Kota <br />2022 - 2025</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/Shre233" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/shreyansh-jain-5445331b0/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiLinkedin /></a>
                            <a href="https://www.instagram.com/jn_shre/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Dhairya} alt="Rakshit Gupta" style={{ width: "100px", marginLeft: "5.2rem", transform: "translateX(-45px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginTop: "1rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Dhairya Majmudar</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px", marginBottom: 0 }}>IIIT Kota <br />2022 - 2026</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/DhairyaMajmudar" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/dhairya-majmudar/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiLinkedin /></a>
                            <a href="https://www.instagram.com/dhairya_majmudar_1511/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Satya} alt="Rakshit Gupta" style={{ width: "100px", marginLeft: "5.2rem", transform: "translateX(-45px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginTop: "1rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Satyendra Bongi</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px", marginBottom: 0 }}>IIIT Kota <br />2022 - 2026</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/S4tyendra" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/s4tyendra/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiLinkedin /></a>
                            <a href="https://www.instagram.com/s4tyendra/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                </Carousel >
            </Mobile>



            <Desktop>
                <Carousel className='CAROUSEL' style={{
                    height: "400px", width: "80%", background: "#0c142c", border: "4px solid #7cdacc", boxShadow: " 0 6px 10px rgba(207, 212, 222, 1)", borderRadius: "10px", padding: "2rem", transform: "translateX(90px)",
                }}>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Rakshit} alt="Rakshit Gupta" style={{ width: "150px", marginLeft: "5.2rem", transform: "translateX(191px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Rakshit Gupta</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px" }}>IIIT Kota 2022 - 2025</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="http://GitHub.com/rakshit2812" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/rakshitgupta0" target='_blank' style={{ color: "white", fontSize: "20px" }} rel="noreferrer"><SiLinkedin /></a>
                            <a href="https://www.instagram.com/rakshitgupta2812/" target='_blank' style={{ color: "white", fontSize: "20px" }} rel="noreferrer"><SiInstagram /></a>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Rujul} alt="Rakshit Gupta" style={{ width: "150px", marginLeft: "5.2rem", transform: "translateX(191px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Rujul Dudhat</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px" }}>IIIT Kota 2022 - 2025</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/RujulP14" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/rujul-dudhat" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiLinkedin /></a>
                            <a href="https://instagram.com/rujul_09" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c", }} >

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Shreyansh} alt="Rakshit Gupta" style={{ width: "150px", marginLeft: "5.2rem", transform: "translateX(191px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Shreyansh Jain</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px" }}>IIIT Kota 2022 - 2025</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/Shre233" target='_blank' style={{ color: "white", fontSize: "20px" }} rel="noreferrer"><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/shreyansh-jain-5445331b0/" target='_blank' style={{ color: "white", fontSize: "20px" }} rel="noreferrer"><SiLinkedin /></a>
                            <a href="https://www.instagram.com/jn_shre/" target='_blank' style={{ color: "white", fontSize: "20px" }} rel="noreferrer"><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Dhairya} alt="Rakshit Gupta" style={{ width: "150px", marginLeft: "5.2rem", transform: "translateX(191px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Dhairya Majmudar</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px" }}>IIIT Kota 2022 - 2026</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/DhairyaMajmudar" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/dhairya-majmuda/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiLinkedin /></a>
                            <a href="https://www.instagram.com/dhairya_majmuda_1511/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiInstagram /></a>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item className='CAROUSEL.ITEM' style={{ background: "#0c142c" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={Satya} alt="Rakshit Gupta" style={{ width: "150px", marginLeft: "5.2rem", transform: "translateX(191px)", borderRadius: "50%", border: "4px solid #7cdacc", padding: 0 }} />
                            <p style={{ color: "white", margin: "2rem", marginBottom: "10px", textAlign: "center", fontSize: "22px" }}>Satyendra Bongi</p>
                            <p style={{ color: "white", letterSpacing: "0.25rem", textAlign: "center", fontSize: "15px" }}>IIIT Kota 2022 - 2026</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center" }}>
                            <a href="https://github.com/S4tyendra" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiGithub /></a>
                            <a href="https://www.linkedin.com/in/s4tyendra/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiLinkedin /></a>
                            <a href="https://www.instagram.com/s4tyendra/" target='_blank' style={{ color: "white", fontSize: "20px" }}><SiInstagram /></a>
                        </div>
                    </Carousel.Item>
                </Carousel >
            </Desktop></>

    );
}

export default UncontrolledExample;