import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarRecipes.scss';

const NavbarRecipes = () => {
    return (
        <div id="subnavbar">
            <div class="menu-container">
                <ul class="menu">
                    <li>
                        <Link to="/saved">Saved</Link>
                    </li>
                    <li>
                        <Link to="/online">Online</Link>
                    </li>
                    {/* <li>
                        <Link to="/recipe-add">Add Recipe</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default NavbarRecipes;
