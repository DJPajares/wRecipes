import React from "react";
import styles from './ViewRecipes.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ViewRecipe = (
    {
        // key,
        title,
        description,
        image,
        calories,
        cuisineType,
        dishType,
        mealType,
        ingredients,
        directions,
        duration,
        servings
    }
) => {
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
        <div className={styles["wrapper"]}>
            <div className={styles["wrapper-header"]}>
                <img className={styles["image"]} src={image} alt=""></img>
                <button className={styles["btn-add"]}>
                    <FontAwesomeIcon icon={ faPlus }/>
                </button>
            </div>
            <div className={styles["wrapper-body"]}>
                { title === undefined ? null :
                    <h1>{title}</h1>
                }

                { cuisineType === undefined ? null :
                    <p className={styles["subtitle"]}>({cuisineType})</p>
                }

                { description === undefined ? null :
                    <p className={styles["description"]}>{description}</p>
                }

                { ingredients === undefined ? null :
                    <div className={styles["wrapper-list"]}>
                        <p>Ingredients:</p>
                        <ul className={styles["items"]}>
                            {ingredients.map(ingredients =>(
                                <li className={styles["items"]}>
                                    { 
                                    ingredients.name_full === undefined ? 
                                    ingredients.name + '(' + ingredients.amount.quantity + ' ' + (ingredients.amount.unit ? ingredients.amount.unit : null) + ')' : 
                                    ingredients.name_full 
                                    }
                                    {/* {ingredients.name} ({ingredients.amount.quantity} {ingredients.amount.unit ? ingredients.amount.unit : null}) */}
                                </li>
                            ))}
                        </ul>
                    </div>
                }

                { directions === undefined ? null :
                    <div className={styles["wrapper-list"]}>
                        <p>Directions:</p>
                        <ol className={styles["items"]}>
                            {directions.map(direction =>(
                                <li className={styles["items"]}>{direction}</li>
                            ))}
                        </ol>
                    </div>
                }
            </div>
            <div className={styles["wrapper-footer"]}>
                { duration === undefined ? null :
                    <p className={styles["footer"]}>Duration: {timeConvert(duration)}</p>
                }
            </div>
        </div>
    );
};

export default ViewRecipe;