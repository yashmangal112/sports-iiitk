import React, { useState } from 'react';
import{linkedin} from "../images/linkedin-3d.png"
import{insta} from "../images/insta-3d.png"
import{github} from "../images/github-3d.png"

const MyComponent = () => {
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
    width: '24px',
    height: '24px',
    opacity: '0',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    transform: 'translateY(-10px)',
  };

  const hoverImageActiveStyle = {
    opacity: '1',
    transform: 'translateY(0)',
  };

  return (
    <div>
      <span>Created with ❤️ by </span>
      <span className="designed-by"
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        Yash Mangal
      </span>
      {isHovered && (
        <div style={{display:"flex"}}>
        <div style={imageContainerStyle}>
          <a href="https://github.com/yashmangal112">
            <img src={github} alt="Your Image" style={{
                ...hoverImageStyle,
                ...(isHovered && hoverImageActiveStyle),
              }}/>
          </a>
          <a href="https://www.linkedin.com/in/yashmangal112/">
            <img src={linkedin} alt="Your Image" style={{
                ...hoverImageStyle,
                ...(isHovered && hoverImageActiveStyle),
              }}/>
          </a>
          <a href="https://www.instagram.com/yash_mangal_112/">
            <img src={insta} alt="Your Image" style={{
                ...hoverImageStyle,
                ...(isHovered && hoverImageActiveStyle),
              }}/>
          </a>
        </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
