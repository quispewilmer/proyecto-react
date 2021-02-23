import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Menu = () => {
    return(
    <nav>
        <ul>
            <li><NavLink to="/" exact activeClassName="activo">Banner</NavLink></li>
            <li><NavLink to="/cards" activeClassName="activo">CardGrid</NavLink></li>
            <li><NavLink to="/form" activeClassName="activo">Form</NavLink></li>
        </ul>
    </nav>
    );
}

export default Menu;