import React from 'react';
import "./style/Navbar.css"

const Navbar = ({setToken}) => {

    const logOutHandler = () => {
        setToken("");
        localStorage.clear();
    };

    return (
        <div className='Navbar'>
            <h1>Bukapedia App</h1>
            <button className="log-out-btn" onClick={ () => logOutHandler ()}> 
            Log Out
            </button>
            </div>
    )
}
export default Navbar