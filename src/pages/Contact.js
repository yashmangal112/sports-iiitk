function Contact() {
  return (
    <div>
      <div id="contact" className="contact">
        <div className="contactleft">
          <h1 className="contactinfo">CONTACT INFORMATION</h1>
          <h3 className="sports"> Sports Secretary</h3>
          <div className="contact-flex">
            <img id="phone-img" src={require("../images/Vector.png")} alt="#" />
            <p className="detail-contact">+91 7014161228</p>
          </div>
          <div className="contact-flex">
            <img src={require("../images/Vector1.png")} alt="#" />
            <p className="detail-contact">cultural_society@xyz.com</p>
          </div>
          <div className="contact-flex">
            <img src={require("../images/Vector2.png")} alt="#" />
            <p className="detail-contact">Prabha Bhawan, MNIT</p>
          </div>
          <img id="design" src={require("../images/Football.png")} alt="" />
          <div className="icon-contact">
            <a href="https://www.facebook.com/rujul.patel.121/">
              <img
                className="icon1"
                src={require("../images/facebook.png")}
                alt="facebook"
              ></img>
            </a>
            <a href="https://twitter.com/Rujul_14">
              <img
                className="icon1"
                src={require("../images/twitter.png")}
                alt="twitter"
              ></img>
            </a>
            <a href="https://www.instagram.com/rujul_09/">
              <img
                className="icon1"
                src={require("../images/instagram.png")}
                alt="instagram"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/rujul-dudhat/">
              <img
                className="icon1"
                src={require("../images/linkedin.png")}
                alt="linkedin"
              ></img>
            </a>
          </div>
        </div>
        <div className="getintouch">
          <h3 className="get-in-touch">GET IN TOUCH</h3>
          <p className="aboutinfo">
            Feel free to contact us onyour queries and we'll get back to you as
            soon as possible
          </p>
          <div className="inputinfo">
            <form>
              <input className="input-css" placeholder="Name"></input>
              <input className="input-css" placeholder="Email"></input>
              <textarea
                className="message input-css"
                placeholder="Message"
              ></textarea>
              <button className="submit" type="submit">
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
