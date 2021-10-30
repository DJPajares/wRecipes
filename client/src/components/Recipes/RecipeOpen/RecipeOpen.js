import React, { Component } from 'react';
import styles from './RecipeOpen.module.scss';
// import ViewRecipeMinimal from "../../../views/ViewRecipeMinimal"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const MySwal = withReactContent(Swal);

// const RecipeOpen = (props) => {
export default class RecipeOpen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleRecipe: JSON.parse(props.location.singleRecipe)
        };
    }

    delRecipe = () => {
        MySwal.fire({
            // title: 'Delete!',
            text: 'Are you sure you want to remove this recipe?',
            icon: 'warning',
            focusConfirm: false,
            showDenyButton: true,
            showCloseButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No'
        }).then((result) => {
            if(result.isConfirmed) {
                let id = this.state.singleRecipe['id'];

                // const response = fetch(`/api/delete?q=${id}`);
                // const data = await response.json();
                // console.log(response);

                fetch(`/api/delete?q=${id}`)
                    .then(res => res.json())
                    .then(data => console.log(data));

                    this.props.history.push("/saved");
                // Notification
                MySwal.fire(
                    {
                        text: 'Recipe deleted',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    }
                );
                // MySwal.fire(
                // ).then(() => {
                // });
            } else {
                // MySwal.fire(
                //     {
                //         text: 'Aborted',
                //         icon: 'error',
                //         confirmButtonText: 'Ok',
                //     }
                // )
            }
        });
    };

    // editRecipe = () => {
    //     this.props.history.push("/recipe-add");
    // }

    render() {
        // let recipe = JSON.parse(props.location.singleRecipe);
        let recipe = this.state.singleRecipe;
    
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
            <div className={styles["wrapper"]}>
                <div className={styles["wrapper-main"]}>
                    <button className={styles["btn-back"]}>
                        <Link to="/saved" className={styles["btn-text"]}><FontAwesomeIcon icon={ faArrowLeft }/> Back to recipes</Link>
                    </button>
                    <button className={styles["btn-delete"]} onClick={this.delRecipe}>
                    {/* <button className={styles["btn-edit"]} onClick={this.onSubmit} onMouseEnter={this.getData}> */}
                        <FontAwesomeIcon icon={ faTrashAlt }/> DELETE
                    </button>
                </div>
                <div className={styles["wrapper-sub"]}>
                    <div className={styles["wrapper-header"]}>
                        <img className={styles["image"]} src={recipe.image} alt=""></img>
                        <button className={styles["btn-edit"]} onClick={this.editRecipe}>
                            {/* <FontAwesomeIcon icon={ faEdit }/>
                            <Link to="/recipe-add" className={styles["btn-text"]}><FontAwesomeIcon icon={ faEdit }/> Back to recipes</Link> */}
                            <Link
                                key = {recipe.id}
                                to={{ pathname: `/recipe-add`, singleRecipe: `${JSON.stringify(recipe)}` }}
                                // style={{ textDecoration: 'none' }}
                            >
                                <FontAwesomeIcon icon={ faEdit } color="white"/>
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

                        { recipe.ingredients === undefined || recipe.ingredients === null ? null :
                            <div className={styles["wrapper-list"]}>
                                <p>Ingredients:</p>
                                <ul className={styles["items"]}>
                                    {recipe.ingredients.map((ingredient, index) =>(
                                        <li className={styles["items"]} key={index}>
                                            { 
                                                ingredient.name_full === undefined ? 
                                                ingredient.name + (ingredient.amount.quantity ? '(' + ingredient.amount.quantity + ' ' + (ingredient.amount.unit ? ingredient.amount.unit : null) + ')' : null) : 
                                                ingredient.name_full 
                                            }
                                            {/* {ingredient.name} */}
                                            {/* {ingredient.name} ({ingredient.amount.quantity} {ingredient.amount.unit ? ingredient.amount.unit : null}) */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }

                        { recipe.directions === undefined || recipe.directions === null ? null :
                            <div className={styles["wrapper-list"]}>
                                <p>Directions:</p>
                                <ol className={styles["items"]}>
                                    {recipe.directions ? 
                                        recipe.directions.map((direction, index) =>(
                                            <li className={styles["items"]} key={index}>{direction}</li>
                                        ))
                                        :
                                        null
                                    }
                                </ol>
                            </div>
                        }
                    </div>
                    <div className={styles["wrapper-footer"]}>
                        { recipe.servings === undefined ? null :
                            <p className={styles["footer-left"]}>Servings: {recipe.servings}</p>
                        }
                        { recipe.duration === undefined ? null :
                            <p className={styles["footer-right"]}>Duration: {timeConvert(recipe.duration)}</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
// };

// export default RecipeOpen;