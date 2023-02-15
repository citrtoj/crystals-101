import './Card.css'

function Card(props) {
    return (
        <div style={{backgroundColor: `${props.color}` }}  className="Card">
            <img src={props.img} alt="card"/>
            <div className = "Card-text-wrapper">
                <h1>
                    {props.name}
                </h1>
                {props.children}
            </div>
        </div>
    )
}

export default Card;