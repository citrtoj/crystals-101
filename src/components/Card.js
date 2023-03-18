import './Card.css'
import { useNavigate } from 'react-router-dom';
function Card(props) {
    let path = '/crystal/' + props.id;
    let navigate = useNavigate(); 
    function routeChange(event) {
        event.preventDefault();
        navigate(path);
    }
    return (
        <div style={{backgroundColor: `${props.color}` }}  className="Card">
            <img src={props.img} alt="card"/>
            <div className = "Card-text-wrapper">
                    <a href={path} onClick={routeChange}>
                        <h6>
                            {props.name}
                        </h6>
                    </a>
                <p>
                    {props.desc}
                </p>
                <div className="Card-tag-wrapper">
                    {props.tags && props.tags.map(tag => <p key={tag} className="Tag"> {tag} </p> )}
                </div>
            </div>
        </div>
    )
}

export default Card;