function EventCard(props) {
    return (
        <div>
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <img alt="" src={props.image} id="event_img"></img>
                        <p className="title__">{props.subtitle}</p>
                        <a href={props.href_value} className="shadow__btn"> SEE MORE</a>
                    </div>
                    <div className="backSide">
                        <p className="title__">{props.detail}</p>
                        <p>{props.date}</p>
                        <a href={props.href_value} className="shadow__btn">Know More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
