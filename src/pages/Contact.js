// import Header from "../common/Header.js";
// import Footer from "../common/Footer.js";
function Contact(){
    return (
        <div>
            {/* <Header/> */}
            <div className="contact">
                <div className="hello">
                    <div className="contactleft">
                        <h1 className="contactinfo">CONTACT INFORMATION</h1>
                        <h3 className="sports"> Sports Secretary</h3>
                        <p>+91 7014161228</p>
                        <p>cultural_society@xyz.com</p>
                        <p>Prabha Bhawan, MNIT</p>
                        <div className="icon-contact">
                        <a href="https://www.facebook.com/rujul.patel.121/"><img className="icon1" src={require("../images/facebook.png")} alt="facebook"></img></a>
                        <a href="https://twitter.com/Rujul_14"><img className="icon1" src={require("../images/twitter.png")} alt="twitter"></img></a>
                        <a href="https://www.instagram.com/rujul_09/"><img className="icon1" src={require("../images/instagram.png")} alt="instagram"></img></a>
                        <a href="https://www.linkedin.com/in/rujul-dudhat/"><img className="icon1" src={require("../images/linkedin.png")} alt="linkedin"></img></a>
                    </div>
                    </div> 
                </div>
                <div className="getintouch">
                    <h3 className="get-in-touch">
                        GET IN TOUCH
                    </h3>
                    Feel free to contact us onyour queries and we'll get back to you as soon as possible
                    <div className="inputinfo">
                        <form>
                            <input className="name" placeholder="Name"></input>
                            <input className="email" placeholder="Email"></input>
                            <textarea className="message" placeholder="Message"></textarea>
                            <button className="submit" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default Contact;