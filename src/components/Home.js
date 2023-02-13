import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
function Home(){
    return (
        <div>
            <Header/>
            <div className="page">
                <div className="main">
                    <h1>From Zero To Sports Hero</h1>
                    we focus on enable we focus on enable we focus on enable we focus on enable we focus on enable we focus on enable we focus on enable we focus on enable we focus on enable we focus on enable 
                </div>
            </div>
            <div className="photos">
                <img src={require("../images/Rectangle 8.png")}></img>
                <img src={require("../images/Rectangle 17.png")}></img>
                <img src={require("../images/Rectangle 11.png")}></img>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;