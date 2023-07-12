import Header from "../../common/Header";
import Footer from "../../common/Footer.js";
import './NewGallery.css'
import img1 from '../../images/football.jpg'
import img2 from '../../images/img23.jpg'
import img3 from '../../images/img33.jpg'
import var1 from '../../images/varchas1.jpg'
import var2 from '../../images/varchas2.jpg'
import var3 from '../../images/varchas3.jpg'
import mst7 from '../../images/mst7.jpg'
import mst8 from '../../images/mst8.jpg'
import mst9 from '../../images/mst9.jpg'
import mst10 from '../../images/mst10.jpg'
import khel3 from '../../images/khel3.jpg'
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
            id: 7,
            imgSrc: mst7,
        },
        {
            id: 6,
            imgSrc: var3,
        },
        {
            id: 4,
            imgSrc: var1,
        },
        {
            id: 5,
            imgSrc: var2,
        },
        {
            id: 11,
            imgSrc: khel3
        },
        {
            id: 8,
            imgSrc: mst8,
        },
        {
            id: 9,
            imgSrc: mst9,
        },
        {
            id: 10,
            imgSrc: mst10,
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