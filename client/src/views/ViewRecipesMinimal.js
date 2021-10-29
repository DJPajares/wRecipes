import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from './ViewRecipesMinimal.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

class ViewRecipeMinimal extends Component {
    render() {
        let recipe = {
            id : this.props.id,
            title : this.props.title,
            description : this.props.description,
            image : this.props.image,
            calories : this.props.calories,
            cuisineType : this.props.cuisineType,
            dishType : this.props.dishType,
            mealType : this.props.mealType,
            ingredients : this.props.ingredients,
            directions : this.props.directions,
            duration : this.props.duration,
            servings : this.props.servings
        }

        // let key = this.props.key;
        // let title = this.props.title;
        // let description = this.props.description;
        // let image = this.props.image;
        // let calories = this.props.calories;
        // let cuisineType = this.props.cuisineType;
        // let dishType = this.props.dishType;
        // let mealType = this.props.mealType;
        // let ingredients = this.props.ingredients;
        // let directions = this.props.directions;
        // let duration = this.props.duration;
        // let servings = this.props.servings;

        const timeConvert = (time) => {
            if(time > 60) {
                var hrs = time / 60;
                var rhrs = Math.floor(hrs);
                var mins = (hrs - rhrs) * 60;
                var rmins = Math.round(mins);
                var hrs_txt = rhrs == 1 ? "hr" : "hrs";
                var mins_txt = rmins == 1 ? "min" : "mins";


                return rhrs + hrs_txt + ' ' + rmins + mins_txt;
            } else {
                return time == 1 ? `${time}min` : `${time}mins`;
            }
        }

        return (
            // <div className="wrapper">
            <Link
                key = {recipe.id}
                to={{ pathname: `/recipe-open`, singleRecipe: `${JSON.stringify(recipe)}` }}
                // to={{ pathname: `/${key}` }}
                // to='/recipe-open'
                style={{ textDecoration: 'none' }}
            >
                <div>
                    <div className={styles["wrapper-body"]}>
                        <img className={styles["image"]} src={recipe.image} alt=""></img>

                        <div className={styles["wrapper-dark-fading"]}>
                            { recipe.duration === undefined ? null :
                                <p className={styles["subTitle"]}>{timeConvert(recipe.duration)}</p>
                            }
                        </div>
                    </div>
                    <div className={styles["wrapper-footer"]}>
                        { recipe.title === undefined ? null :
                            <p className={styles["title"]}>{recipe.title}</p>
                        }
                    </div>
                </div>
            </Link>
        );
    }
};

export default ViewRecipeMinimal;