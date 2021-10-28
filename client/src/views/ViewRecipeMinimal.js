import React from "react";
import styles from './ViewRecipeMinimal.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ViewRecipeMinimal = (
    {
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
            var hrs_txt = rhrs > 1 ? "hrs" : "hr";
            var mins_txt = rmins > 1 ? "mins" : "mins";


            return rhrs + hrs_txt + ' ' + rmins + mins_txt;
        } else {
            return time > 1 ? `${time}mins` : `${time}min`;
        }
    }

    return (
        // <div className="wrapper">
        <div>
            <div className={styles["wrapper"]}>
                <div className={styles["wrapper-body"]}>
                    <div className={styles["wrapper-image"]}>
                        <img className={styles["image"]} src={image} alt=""></img>
                    </div>

                    <div className={styles["wrapper-dark-fading"]}>
                        { duration === undefined ? null :
                            <p className={styles["subTitle"]}>{timeConvert(duration)}</p>
                        }
                    </div>
                </div>
            </div>
            <div className={styles["wrapper-footer"]}>
                { title === undefined ? null :
                    <p className={styles["title"]}>{title}</p>
                }
            </div>
        </div>
    );
};

export default ViewRecipeMinimal;