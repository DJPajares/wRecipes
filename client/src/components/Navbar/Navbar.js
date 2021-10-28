import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div id="navbar">
            <div class="title">
                <Link to="/">wRecipes</Link>
            </div>
            <div class="menu-container">
                <ul class="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/recipes/saved">Recipes</Link> */}
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/planner">Planner</Link>
                    </li>
                    <li>
                        <Link to="/shopping">Shopping</Link>
                    </li>
                </ul>
            </div>
            {/* <div class="right">
                <a href="#">Welcome</a>
            </div> */}
        </div>
    );
}

export default Navbar;
