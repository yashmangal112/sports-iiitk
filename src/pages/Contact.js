function Contact() {
    return (
        <div>
            <div id="contact" className="contact">
                <div className="contactleft">
                    <h1 className="contactinfo">CONTACT INFORMATION</h1>
                    <h3 className="sports"> Sports Secretary</h3>
                    <div className="secretery-info">
                        <div className="contact-flex">
                            <i className="fa fa-phone"></i>
                            <p className="detail-contact">+91 7014151228</p>
                        </div>
                        <div className="contact-flex">
                            <i className="fa fa-envelope"></i>
                            <p className="detail-contact">cultural_society@xyz.com</p>
                        </div>
                        <div className="contact-flex">
                            <i className="fa fa-location-dot"></i>
                            <p className="detail-contact">Prabha Bhawan, MNIT</p>
                        </div>
                    </div>
                    <div className="icon-contact">
                        <a href="https://www.facebook.com/rujul.patel.121/">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/Rujul_14">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/rujul_09/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rujul-dudhat/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <img id="design" src={require("../images/Football.png")} alt=""/>
                </div>
                <div className="getintouch">
                    <h3 className="get-in-touch">GET IN TOUCH</h3>
                    <p className="aboutinfo">
                        Feel free to contact us onyour queries and we'll get back to you as
                        soon as possible
                    </p>
                    <div className="inputinfo">
                        <form>
                            <input className="input-css" type="name" autoComplete="true" placeholder="Name"
                                   required></input>
                            <input className="input-css" type="email" autoComplete="true" placeholder="Email"
                                   required></input>
                            <textarea
                                className="message input-css"
                                placeholder="Message"
                            ></textarea>
                            <button className="submit" type="submit" required>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
