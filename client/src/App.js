import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Planner from './components/Planner/Planner';
import Grocery from './components/Grocery/Grocery';

// import Saved from './components/Recipes/Saved/Saved';
// import Online from './components/Recipes/Online/Online';
// import RecipeAdd from './components/Recipes/RecipeAdd/RecipeAdd';

const App = () =>  {
  return (
    <BrowserRouter basename='/'>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/recipes' component = { Recipes } />
          <Route path = '/planner' component = { Planner } />
          <Route path = '/grocery' component = { Grocery } />

          {/* <Route path = '/recipes/saved' component = { Saved } />
          <Route path = '/recipes/addrecipe' component = { RecipeAdd } />
          <Route path = '/recipes/online' component = { Online } /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
