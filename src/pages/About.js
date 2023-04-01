import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
function About() {
    
    let navigate = useNavigate(); 
    function handleClick() {
        navigate('/')
    }

    return (
        <>
        <Navbar/>
        <div className="Page-center-wrapper">
            <h1>About</h1>
            <p>This project was made by Sabina Prodan, as part of the ExpertNetwork React workshop.</p>
            <p><a href="https://github.com/citrtoj/crystals-101">Check it out on Github!</a></p>
            <button onClick={handleClick}>Go Home</button>
        </div>
        </>
    )
}

export default About;