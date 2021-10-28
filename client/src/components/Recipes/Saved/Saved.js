import React from 'react';
// import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
// import AddRecipe from '../AddRecipe/AddRecipe';
import { Link } from 'react-router-dom';
import styles from './Saved.module.scss';
import ViewRecipeMinimal from "../../../views/ViewRecipeMinimal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Saved = () => {
    const[recipes, setRecipes] = React.useState([]);
    const[search, setSearch] = React.useState("");
    const[query, setQuery] = React.useState("");

    React.useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        // const response = await fetch(`/api/recipes`);   //all
        const response = await fetch(`/api/search?q=${query}`);
        const data = await response.json();
        setRecipes(data);
        console.log(data);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className={styles["wrapper-main"]}>
            <div>
                <button className={styles["btn-add"]}>
                    <Link to="/add-recipe" className={styles["btn-text"]}><FontAwesomeIcon icon={ faPlus }/> ADD</Link>
                </button>
                <form className={styles["search-form"]} onSubmit={getSearch}>
                    <input 
                        type="text" 
                        className={styles["search-bar"]}
                        placeholder="e.g. Vegan"
                        value={search}
                        onChange={updateSearch}
                    />
                    <button type="submit" className={styles["search-button"]}>
                        <FontAwesomeIcon icon={ faSearch }/>
                    </button>
                </form>
            </div>
            <div className={styles["recipes"]}>
                {recipes.map((recipe, index) =>(
                    <ViewRecipeMinimal 
                        key={index}
                        title={recipe.title}
                        description={recipe.description}
                        // image={recipe.image}
                        // calories={recipe.calories}
                        // cuisineType={recipe.cuisineType.join(", ")}
                        // dishType={recipe.dishType.join(", ")}
                        // mealType={recipe.mealType.join(", ")}
                        ingredients={recipe.ingredients}
                        directions={recipe.directions}
                        duration={recipe.duration}
                        servings={recipe.servings}
                    />
                ))}
            </div>
        </div>
    );
}

export default Saved;