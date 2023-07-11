import Header from "../../common/Header";
import Footer from "../../common/Footer.js";
import './NewGallery.css'
import img1 from '../../images/football.jpg'
import img2 from '../../images/img23.jpg'
import img3 from '../../images/img33.jpg'
import khel1 from '../../images/khel1.jpg'
import khel2 from '../../images/khel2.jpg'
import khe13 from '../../images/khel3.jpg'
import khel4 from '../../images/khel4.jpg'
import khel5 from '../../images/khel5.jpg'
import khel6 from '../../images/khel6.jpg'
import khel7 from '../../images/khel7.jpg'
import khel8 from '../../images/khel8.jpg'
import khel9 from '../../images/khel9.jpg'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Gall_Page1 = () => {

  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: khel1,
    },
    {
      id: 5,
      imgSrc: khel2,
    },
    {
      id: 6,
      imgSrc: khe13,
    },
    {
      id: 7,
      imgSrc: khel4,
    },
    {
      id: 8,
      imgSrc: khel5,
    },
    {
      id: 9,
      imgSrc: khel6,
    },
    {
      id: 10,
      imgSrc: khel7,
    },
    {
      id: 11,
      imgSrc: khel8,
    },
    {
      id: 12,
      imgSrc: khel9,
    },

  ]

  const [model, setModel] = useState(false)
  const [tempingSrc, setTempingSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
      <Header></Header>

      <div>
        <h1 className="center">Gallery</h1>


        <div className={model ? "model open" : "model"}>
          <img src={tempingSrc} />
          <CloseIcon sx={{ color: "white", transform: "translate(-30px,-250px)" }} onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
          {
            data.map((item, index) => {
              return (
                <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{ width: "100%", padding: 0, borderRadius: "4px" }} />
                </div>
              )
            })
          }
        </div>

      </div>

      <Footer></Footer>
    </>
  )
}
export default Gall_Page1