import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/"> Home </NavLink> </li>
                <li><NavLink to="/dog-list"> DogsList </NavLink> </li>
                <li><NavLink to="/dog-game-1"> Dog Game 1 </NavLink> </li>
                <li><NavLink to="/dog-game-2"> Dog Game 2 </NavLink> </li>
            </ul>
        </div>
    )
}

export default Navigation