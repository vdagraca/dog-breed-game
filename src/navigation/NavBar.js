import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


const Navigation = () => {
    return (
        <div className="NavBar">
            <ul>
                <li className="list-items"><NavLink className="list-items" to="/"> Home </NavLink> </li>
                <li className="list-items"><NavLink className="list-items" to="/dog-list"> Dog Breeds List </NavLink> </li>
                <li className="list-items"><NavLink className="list-items" to="/dog-game-1"> Dog Game 1 </NavLink> </li>
                <li className="list-items"><NavLink className="list-items" to="/dog-game-2"> Dog Game 2 </NavLink> </li>
            </ul>
        </div>
    )
}

export default Navigation