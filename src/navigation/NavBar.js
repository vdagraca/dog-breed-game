import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/dog-list"> DogsList </NavLink>
            {/* <NavLink to="/dog-game-1"> Dog Game 1 </NavLink> */}

        </div>
    )
}

export default Navigation