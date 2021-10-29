import React, { Component } from 'react';
import styles from './RecipeOpen.module.scss';
// import ViewRecipeMinimal from "../../../views/ViewRecipeMinimal"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const RecipeOpen = (props) => {
    let recipe = JSON.parse(props.location.singleRecipe);

    // console.log(recipe)

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
        <div className="wrapper">
            <div className={styles["wrapper-main"]}>
                <button className={styles["btn-back"]}>
                    <Link to="/saved" className={styles["btn-text"]}><FontAwesomeIcon icon={ faArrowLeft }/> Back to recipes</Link>
                </button>
                <button className={styles["btn-edit"]}>
                {/* <button className={styles["btn-edit"]} onClick={this.onSubmit} onMouseEnter={this.getData}> */}
                    {/* <FontAwesomeIcon icon={ faSave }/> */}
                    EDIT
                </button>
            </div>
            <div className={styles["wrapper-sub"]}>
                <div className={styles["wrapper-header"]}>
                    <img className={styles["image"]} src={recipe.image} alt=""></img>
                    <button className={styles["btn-add"]}>
                        <FontAwesomeIcon icon={ faTrashAlt }/>
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
                                        {/* { 
                                            ingredient.name_full === undefined ? 
                                            ingredient.name + (ingredient.amount.quantity ? '(' + ingredient.amount.quantity + ' ' + (ingredient.amount.unit ? ingredient.amount.unit : null) + ')' : null) : 
                                            ingredient.name_full 
                                        } */}
                                        {ingredient.name}
                                        {/* {ingredient.name} ({ingredient.amount.quantity} {ingredient.amount.unit ? ingredient.amount.unit : null}) */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                    { recipe.directions === undefined ? null :
                        <div className={styles["wrapper-list"]}>
                            <p>Directions:</p>
                            <ol className={styles["items"]}>
                                {recipe.directions ? 
                                    recipe.directions.map(direction =>(
                                        <li className={styles["items"]}>{direction}</li>
                                    ))
                                    :
                                    null
                                }
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
        </div>
    );
};

export default RecipeOpen;