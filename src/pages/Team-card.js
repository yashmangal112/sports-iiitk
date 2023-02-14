function TeamCard(props){
    return (
        <div>
                <div className="info">
                    <div className="shadow"><img className="team-images" src={props.image} alt="#"/></div>
                    <div className="box">
                        <p className="name">{props.name}</p>
                        <p className="post">{props.post}</p>
                    </div>
                </div>
        </div>
    );
}

export default TeamCard;