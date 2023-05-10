function EventCard(props) {
    return (
        <div>
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <img alt="" src={props.image} id="event_img"></img>
                        <p className="title__">{props.subtitle}</p>
                        <button className="shadow__btn">
                            SEE MORE
                        </button>
                    </div>
                    <div className="backSide">
                        <p className="title__">{props.detail}</p>
                        <p>{props.date}</p>
                        <a href={props.href_value}>
                            <button className="shadow__btn">
                                Know More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
