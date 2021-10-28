import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Planner from './components/Planner/Planner';
import Shopping from './components/Shopping/Shopping';

// import Saved from './components/Recipes/Saved/Saved';
// import Online from './components/Recipes/Online/Online';
// import AddRecipe from './components/Recipes/AddRecipe/AddRecipe';

const App = () =>  {
  return (
    <BrowserRouter basename='/wrecipes/'>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/recipes' component = { Recipes } />
          <Route path = '/planner' component = { Planner } />
          <Route path = '/shopping' component = { Shopping } />

          {/* <Route path = '/recipes/saved' component = { Saved } />
          <Route path = '/recipes/addrecipe' component = { AddRecipe } />
          <Route path = '/recipes/online' component = { Online } /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
