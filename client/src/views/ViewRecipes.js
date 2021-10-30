import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from './ViewRecipes.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ViewRecipe extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    render() {
        let recipe = {
            status : 2, // Online-New
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

        const timeConvert = (time) => {
            if(time > 60) {
                var hrs = time / 60;
                var rhrs = Math.floor(hrs);
                var mins = (hrs - rhrs) * 60;
                var rmins = Math.round(mins);
                var hrs_txt = rhrs === 1 ? "hr" : "hrs";
                var mins_txt = rmins === 1 ? "min" : "mins";


                return rhrs + hrs_txt + ' ' + rmins + mins_txt;
            } else {
                return time === 1 ? `${time}min` : `${time}mins`;
            }
        }

        return (
            // <div className="wrapper">
            <div className={styles["wrapper"]}>
                <div className={styles["wrapper-header"]}>
                    <img className={styles["image"]} src={recipe.image} alt=""></img>
                    <button className={styles["btn-add"]}>
                        <Link
                            key = {recipe.id}
                            to={{ pathname: `/recipe-add`, singleRecipe: `${JSON.stringify(recipe)}` }}
                            // style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon icon={ faPlus } color="white"/>
                        </Link>
                    </button>
                </div>
                <div className={styles["wrapper-body"]}>
                    { recipe.title === undefined ? null :
                        <h1>{recipe.title}</h1>
                    }
    
                    { recipe.cuisineType === undefined ? null :
                        <p className={styles["subtitle"]}>({recipe.cuisineType})</p>
                    }
    
                    { recipe.description === undefined ? null :
                        <p className={styles["description"]}>{recipe.description}</p>
                    }

                    { recipe.ingredients === undefined ? null :
                        <div className={styles["wrapper-list"]}>
                            <p>Ingredients:</p>
                            <ul className={styles["items"]}>
                                {recipe.ingredients.map(ingredient =>(
                                    <li className={styles["items"]}>
                                        { 
                                            ingredient.name_full === undefined ? 
                                            ingredient.name + '(' + ingredient.amount.quantity + ' ' + (ingredient.amount.unit ? ingredient.amount.unit : null) + ')' : 
                                            ingredient.name_full 
                                        }
                                        {/* {ingredients.name} ({ingredients.amount.quantity} {ingredients.amount.unit ? ingredients.amount.unit : null}) */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                    { recipe.directions === undefined ? null :
                        <div className={styles["wrapper-list"]}>
                            <p>Directions:</p>
                            <ol className={styles["items"]}>
                                {recipe.directions.map(direction =>(
                                    <li className={styles["items"]}>{direction}</li>
                                ))}
                            </ol>
                        </div>
                    }
                </div>
                <div className={styles["wrapper-footer"]}>
                    { recipe.duration === undefined ? null :
                        <p className={styles["footer"]}>Duration: {timeConvert(recipe.duration)}</p>
                    }
                </div>
            </div>
        );
    }
};

export default ViewRecipe;