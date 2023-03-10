import './Card.css'

function Card(props) {
    return (
        <div style={{backgroundColor: `${props.color}` }}  className="Card">
            <img src={props.img} alt="card"/>
            <div className = "Card-text-wrapper">
                <h6>
                    {props.name}
                </h6>
                <p>
                    {props.desc}
                </p>
                <div className="Card-tag-wrapper">
                    {props.tags && props.tags.map(tag => <a key={tag} href={"/crystals/" + tag} className="Tag"> {tag} </a> )}
                </div>
            </div>
        </div>
    )
}

export default Card;