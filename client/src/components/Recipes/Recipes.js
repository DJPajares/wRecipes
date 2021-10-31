import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarRecipes from '../NavbarRecipes/NavbarRecipes';
import Saved from './Saved/Saved';
import Online from './Online/Online';
import RecipeAdd from './RecipeAdd/RecipeAdd';
import RecipeOpen from './RecipeOpen/RecipeOpen';
// import style from './Recipes.css';

// const Recipes = () => {
class Recipes extends Component {
    render() {
        return (
            <div className='title'>
                <h1>Recipes</h1>
                <div id='content-box'>
                    <BrowserRouter basename='/recipes'>
                        <React.Fragment>
                            <NavbarRecipes />
                            <Switch>
                                <Route path = '/saved' component = { Saved } />
                                <Route path = '/recipe-add' component = { RecipeAdd } />
                                <Route path = '/recipe-open' component = { RecipeOpen } />
                                <Route path = '/online' component = { Online } />
                                {/* <Route exact path = {`${this.props.match.path}/saved`} component = { Saved } />
                                <Route path = {`${this.props.match.path}/recipe-add`} component = { RecipeAdd } />
                                <Route path = {`${this.props.match.path}/recipe-open`} component = { RecipeOpen } />
                                <Route path = {`${this.props.match.path}/online`} component = { Online } /> */}
                            </Switch>
                        </React.Fragment>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Recipes;