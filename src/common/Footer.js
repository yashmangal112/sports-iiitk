import React, { useState } from 'react';
import linkedin from "../images/linkedin-3d.png"
import insta from "../images/insta-3d.png"
import github from "../images/github-3d.png"
import website from "../images/website-3d.png"

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setTimeout(() => {
            setIsHovered(false);
        }, 7000);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTimeout(() => {
        setIsHovered(false);
    }, 4000);
    };

    const imageContainerStyle = {
        // position: 'relative',
    };

    const hoverImageStyle = {
        // position: 'absolute',
        width: '72px',
        height: '30px',
        // opacity: '0',
        // transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        // transform: 'translateY(-10px)',
        animation: 'moveUpDown 1.5s ease-in-out infinite'
        // transition: 'transform 0.3s ease-in-out',
        // transform: isHovered ? 'translateY(-10px)' : 'none',
    };
    

    const hoverImageActiveStyle = {
        opacity: '1',
        transform: 'translateY(0)',
    };
    // const textStyles = {
    //   textDecoration: isHovered ? 'underline' : 'none',
    // };
    const textStyles = {
      position: 'relative',
      display: 'inline-block',
      color: "#4cbedd",
      marginRight: "0.5rem"
    };
  
    const underlineStyles = {
      content: '""',
      position: 'absolute',
      bottom: '-2px',
      left: '0',
      width: '75%',
      height: '2px',
      backgroundColor: "#4cbedd",
      transition: 'width 0.3s ease-in-out',
      visibility: isHovered ? 'visible' : 'hidden',
    };

    return (

        <footer>
            <div className='designed-by footer'>
                <span >Created with ❤️ by </span>
                <span onMouseEnter={handleMouseEnter} style={textStyles} >
                    Yash Mangal 
                    <span style={underlineStyles}></span>
                </span>
                | <span className="fa fa-copyright"></span><span> 2023 All right reserved.</span>
                {isHovered && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <div style={imageContainerStyle}>
                            <a href="https://github.com/yashmangal112" target='__blank'>
                                <img src={github} alt="Images" style={hoverImageStyle} />
                            </a>
                            <a href="https://www.linkedin.com/in/yashmangal112/" target='__blank'>
                                <img src={linkedin} alt="Images" style={hoverImageStyle} />
                            </a>
                            <a href="https://www.instagram.com/yash_mangal_112/" target='__blank'>
                                <img src={insta} alt="Images" style={hoverImageStyle} />
                            </a>
                            <a href="https://yashmangal112.vercel.app/" target='__blank'>
                                <img src={website} alt="Images" style={hoverImageStyle} />
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes moveUpDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

        </footer>
    );
};

export default Footer;
