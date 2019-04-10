import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/dog-list"> DogsList </NavLink>
           
        </div>
    )
}

export default Navigation