import './Card.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Card(props) {
    let path = '/crystal/' + props.id;
    let navigate = useNavigate(); 
    function routeChange(event) {
        event.preventDefault();
        navigate(path);
    }

    const handleHeartCheck = (event) => {
        console.log("checked: " + event.target.checked);
        //first of all, change the STATUS of current check
        //second of all, if id is in cookies, remove id
        let storedFavs = JSON.parse(localStorage.favs);
        if (event.target.checked === false) { //urmeaza un unCheck
            if (storedFavs.includes(props.id)) {
                storedFavs = storedFavs.filter( (id) => id !== props.id );
                console.log(storedFavs);
            }
        }
        else {
            if (!storedFavs.includes(props.id)) {
                storedFavs = [...storedFavs, props.id];
                console.log(storedFavs);
            }
        }
        localStorage.favs = JSON.stringify(storedFavs);
    }
    const setDefaultChecked = () => {
        if (localStorage.favs === undefined) {
            localStorage.favs = JSON.stringify([]);
        }
        if (JSON.parse(localStorage.favs).includes(props.id)) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div style={{backgroundColor: `${props.color}` }}  className="Card" key={props.id}>
            <img src={props.img} alt="card"/>
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
                    {props.tags && props.tags.map(tag => <p key={tag} className="Tag"> {tag} </p> )}
                </div>
            </div>
        </div>
    )
}

export default Card;