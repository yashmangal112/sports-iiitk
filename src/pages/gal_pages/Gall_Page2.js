import Header from "../../common/Header";
import Footer from "../../common/Footer.js";
import './NewGallery.css'
import bosm1 from '../../images/bosm1.jpg'
import bosm2 from '../../images/bosm2.jpg'
import bosm3 from '../../images/bosm3.jpg'
import bosm4 from '../../images/bosm4.jpg'
import bosm5 from '../../images/bosm5.jpg'
import bosm6 from '../../images/bosm6.jpg'
import khel3 from '../../images/khel3.jpg'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
// import CloseIcon from '@mui/icons-material/Close';

const Gall_Page1 = () => {

    let data = [
        {
            id: 1,
            imgSrc: bosm1,
        },
        {
            id: 2,
            imgSrc: bosm2,
        },
        {
            id: 3,
            imgSrc: bosm3,
        },
        {
            id: 4,
            imgSrc: bosm4,
        },
        {
            id: 5,
            imgSrc: bosm5,
        },
        {
            id: 6,
            imgSrc: bosm6,
        },
        {
            id: 7,
            imgSrc: khel3,
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