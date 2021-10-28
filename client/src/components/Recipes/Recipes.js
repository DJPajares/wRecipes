import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarRecipes from '../NavbarRecipes/NavbarRecipes';
import Saved from './Saved/Saved';
import Online from './Online/Online';
import AddRecipe from './AddRecipe/AddRecipe';
// import style from './Recipes.css';

const Recipes = () => {
    return (
        <div className='title'>
            <h1>Recipes</h1>
            <div id='content-box'>
                <BrowserRouter basename='/wrecipes/recipes'>
                    <React.Fragment>
                        <NavbarRecipes />
                        <Switch>
                            <Route path = '/saved' component = { Saved } />
                            <Route path = '/add-recipe' component = { AddRecipe } />
                            <Route path = '/online' component = { Online } />
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Recipes;