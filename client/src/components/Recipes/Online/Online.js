import React from 'react';
import styles from './Online.module.scss';
import ViewRecipe from "../../../views/ViewRecipe"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { addListener } from 'nodemon';

const Online = () => {
    const APP_ID = "603f8b95";
    const API_KEY = "0104a4f3be9cb20952892f37e624a49f";

    const[recipes, setRecipes] = React.useState([]);
    const[search, setSearch] = React.useState("");
    // const[query, setQuery] = React.useState('Vegan');
    const[query, setQuery] = React.useState(null);

    // const URI = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;  // ALL
    // const URI = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&health=vegan&health=vegetarian`;  // Vegan/Vegetarian
    const URI = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&health=vegan`;  // Vegan

    React.useEffect(() => {
        getRecipes();
    }, [query]);

    // async function getRecipes() {
    const getRecipes = async () => {
        const response = await fetch(URI);
        const data = await response.json();

        // > Data cleanup
        var result = data.hits;
        var output = [];
        result.forEach(element => {
            // Modify keys
            var ingredients = [];
            var ingredientsTmp = element.recipe['ingredients'];
            ingredientsTmp.forEach(function(row) {
                ingredients.push({
                    "name" : row.food,
                    "name_full" : row.text,
                    "amount" : {
                        "quantity" : row.quantity,
                        "unit" : row.measure
                    },
                    "image" : row.image,
                    "weight" : row.weight
                });
            });

            // Output
            output.push({
                "title" : element.recipe['label'],
                "image" : element.recipe['image'],
                "calories" : element.recipe['calories'],
                "cuisineType" : element.recipe['cuisineType'],
                "dishType" : element.recipe['dishType'],
                "mealType" : element.recipe['mealType'],
                "ingredients" : ingredients,
                "duration": element.recipe['totalTime']
                // "servings": element.recipe['servings']
            });
        });

        setRecipes(output);
        console.log(result);
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
            <div className={styles["recipes"]}>
                {recipes.map((recipe, index) => (
                    <ViewRecipe
                        key={index}
                        title={recipe.title}
                        image={recipe.image}
                        // description={recipe.description}
                        calories={recipe.calories}
                        cuisineType={recipe.cuisineType.join(", ")}
                        dishType={recipe.dishType.join(", ")}
                        mealType={recipe.mealType.join(", ")}
                        ingredients={recipe.ingredients}
                        // directions={recipe.directions}
                        duration={recipe.duration}
                    />
                ))}
            </div>
        </div>
    );
}

export default Online;