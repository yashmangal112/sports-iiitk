
// function Footer() {
//     return (
//         <footer>
//             <div className="footer">
//                 <div className="designed-by">❤️ DESIGNED BY YASH MANGAL</div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;














import React, { useState } from 'react';
import linkedin from "../images/linkedin-3d.png"
import insta from "../images/insta-3d.png"
import github from "../images/github-3d.png"

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setTimeout(() => {
            setIsHovered(false);
        }, 10000);
    };

    // const handleMouseLeave = () => {
    //   setIsHovered(false);
    // };

    const imageContainerStyle = {
        // position: 'relative',
    };

    const hoverImageStyle = {
        // position: 'absolute',
        width: '70px',
        height: '30px',
        // opacity: '0',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        transform: 'translateY(-10px)',
    };

    const hoverImageActiveStyle = {
        opacity: '1',
        transform: 'translateY(0)',
    };

    return (

        <footer>
            <div className='designed-by footer'>
                <span >Created with ❤️ by </span>
                <span
                    onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                >
                    Yash Mangal
                </span>
                {isHovered && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <div style={imageContainerStyle}>
                            <a href="https://github.com/yashmangal112">
                                <img src={github} alt="Images" style={hoverImageStyle} />
                            </a>
                            <a href="https://www.linkedin.com/in/yashmangal112/">
                                <img src={linkedin} alt="Images" style={hoverImageStyle} />
                            </a>
                            <a href="https://www.instagram.com/yash_mangal_112/">
                                <img src={insta} alt="Images" style={hoverImageStyle} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;