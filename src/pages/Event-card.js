function EventCard(props) {
    return (
      <div>
          <div className="column">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img className="images" src={props.image} alt="Avatar"/>
              </div>
              <div class="flip-card-back">
                <h3 className="sub-title">{props.subtitle}</h3>
                <h5 className="details">{props.detail}</h5>
                <h5 className="details">{props.date}</h5>
                <button className="btn"><a href="#">More Details</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default EventCard;
  