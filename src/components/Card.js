import './Card.css'
import { useNavigate } from 'react-router-dom';

function Card(props) {
    let path = '/crystal/' + props.id;
    let navigate = useNavigate(); 
    function routeChange(event) {
        event.preventDefault();
        navigate(path);
    }

    const handleHeartCheck = (event) => {
        let storedFavs = JSON.parse(localStorage.favs);
        if (event.target.checked === false) {
            if (storedFavs.includes(props.id)) {
                storedFavs = storedFavs.filter( (id) => id !== props.id );
            }
        }
        else {
            if (!storedFavs.includes(props.id)) {
                storedFavs = [...storedFavs, props.id];
            }
        }
        localStorage.favs = JSON.stringify(storedFavs);
    }
    const setDefaultChecked = () => {
        if (localStorage.favs === undefined) {
            localStorage.favs = JSON.stringify([]);
        }
        return (JSON.parse(localStorage.favs).includes(props.id));
    }

    const handleCardTagClick = (tag) => {
        if (props.addTag !== undefined) {
            props.addTag(tag);
            window.scrollTo({
                top: 0
              });
        }
    }

    return (
        <div style={{backgroundColor: `${props.color}` }}  className="Card">
            <div className="Img-4-3">
                <img src={props.img} alt="card"/>
            </div>
            <div className = "Card-text-wrapper">
                    <a href={path} onClick={routeChange}>
                        <h6>
                            {props.name}
                        </h6>
                    </a>
                    <input className="Heart" id={"heart-" + props.id}  defaultChecked={setDefaultChecked()} onChange={(event) => {handleHeartCheck(event);}} type="checkbox"/>
                    <label className="forHeart" htmlFor={"heart-" + props.id}>❤</label>
                <p>
                    {props.desc}
                </p>
                <div className="Card-tag-wrapper">
                    {props.tags && props.tags.map(tag => <p onClick={(e) => {handleCardTagClick(tag)}} key={tag} className="Tag">{tag}</p> )}
                </div>
            </div>
        </div>
    )
}

export default Card;