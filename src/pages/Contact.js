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
                            <p className="detail-contact">+91 9354162566</p>
                        </div>
                        <div className="contact-flex">
                            <i className="fa fa-envelope"></i>
                            <p className="detail-contact">sports@iiitkota.ac.in</p>
                        </div>
                        <div className="contact-flex">
                            <i className="fa fa-location-dot"></i>
                            <p className="detail-contact">Prabha Bhawan, MNIT</p>
                        </div>
                    </div>
                    <div className="icon-contact">
                        <a href="https://twitter.com/fitindia_iiitk" target="blank_">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/fitindia_iiitkota/" target="blank_">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <img id="design" src={require("../images/Football.png")} alt="" />
                </div>
                <div className="getintouch">
                    <h3 className="get-in-touch">GET IN TOUCH</h3>
                    <p className="aboutinfo">
                        Feel free to contact us on your queries and we'll get back to you as soon as possible
                    </p>
                    <div className="inputinfo">
                        <form>
                            <input className="input-css name1" type="name" autoComplete="true" placeholder="Name"
                                required></input>
                            <input className="input-css email" type="email" autoComplete="true" placeholder="Email"
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
