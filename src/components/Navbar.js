import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    let navigate = useNavigate(); 
    function routeChange(event) {
        event.preventDefault();
        navigate(event.target.attributes['href'].value);
    }

    return (
        <div className='navbar'>
            <div className='Wrapper-max-width'>
                <a href="/" onClick={routeChange}>Home</a>
                <a href="/filter" onClick={routeChange}>Filter</a>
                <a href="/about" onClick={routeChange}>About</a>
            </div>
            
        </div>
  )
}

export default Navbar