import { useNavigate } from "react-router-dom";

function NotFound() {
    
    let navigate = useNavigate(); 
    function handleClick() {
        navigate('/')
    }

    return (
        <div className="Page-center-wrapper">
            <h1>Oops!</h1>
            <p>We couldn't find what you were looking for.</p>
            <button onClick={handleClick}>Home</button>
        </div>
    )
}

export default NotFound;