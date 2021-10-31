import React, { Component } from 'react';
import styles from './RecipeAdd.module.scss';
// import ViewRecipeMinimal from "../../../views/ViewRecipeMinimal"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const MySwal = withReactContent(Swal);

export default class RecipeAdd extends Component {
    constructor(props) {
        super(props);

        // Pre-processing
        if(props.location.singleRecipe) { 
            var singleRecipe = JSON.parse(props.location.singleRecipe);

            if(singleRecipe.status === 1) {
                // >> UPDATE

                // Buttons
                    var btnText = "UPDATE";
                // Ingredients
                    if(singleRecipe.ingredients === null || singleRecipe.ingredients === undefined) {
                        var ingredients = [];
                        var ingredientsTxt = '';
                    } else {
                        var ingredientsTxtTmp = [];
                        singleRecipe.ingredients.forEach(function(row) {
                            ingredientsTxtTmp.push(
                                row.name_full
                            );
                        });
                        var ingredientsTxt = ingredientsTxtTmp.join("\n");
                        var ingredients = singleRecipe.ingredients;
                    }
                // Directions
                    var directions = singleRecipe.directions === null || singleRecipe.directions === undefined ? null : singleRecipe.directions.join("\n");
            } else if(singleRecipe.status === 2) {
                // >> UPDATE - ONLINE

                // Buttons
                    var btnText = "SAVE";
                // Ingredients
                    if(singleRecipe.ingredients === null || singleRecipe.ingredients === undefined) {
                        var ingredients = [];
                        var ingredientsTxt = '';
                    } else {
                        var ingredientsTxtTmp = [];
                        singleRecipe.ingredients.forEach(function(row) {
                            ingredientsTxtTmp.push(
                                row.name_full
                            );
                        });
                        var ingredientsTxt = ingredientsTxtTmp.join("\n");
                        var ingredients = singleRecipe.ingredients;
                    }
                // Directions
                    var directions = singleRecipe.directions === null || singleRecipe.directions === undefined ? null : singleRecipe.directions.join("\n");
            }
        } else {
            // >> NEW

            // Buttons
                var btnText = "SAVE";
            // Ingredients
                var ingredients = [];
                var ingredientsTxt = [];
            // Directions
                var directions = [];
        }

        // States
        this.state = {
            src : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.image,
            image : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.image,
            id : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.id,
            title : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.title,
            description : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.description,
            ingredientsTxt : ingredientsTxt,
            ingredients : ingredients,
            directions : singleRecipe === null || singleRecipe === undefined ? null : directions,
            duration : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.duration,
            servings : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.servings,
            // singleRecipe : singleRecipe,
            btnText : btnText,
            status : singleRecipe === null || singleRecipe === undefined ? null : singleRecipe.status
        };

        this.getData = this.getData.bind(this);

        console.log(this.state)
    }

    // On element value change, save its state
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if(e.target.name == "src") {
            this.getData();
        }
    }

    remImage = () => {
        // Remove Image
            MySwal.fire({
                // title: 'Delete!',
                text: 'Are you sure you want to remove the image?',
                // icon: 'warning',
                focusConfirm: true,
                showDenyButton: true,
                showCloseButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: 'No'
            }).then((result) => {
                if(result.isConfirmed) {
                    document.getElementById('form-image').value = null; //remove selected file
                    this.setState({src: null});   //remove state src
                    this.setState({image: null});   //remove state image
                }
            });
    }

    // Save button hover mouse listener - adds delay on image retrieval (doesn't work if directly processed on onSubmit)
    getData = () => {
        // Set Image
            let file = document.getElementById('form-image').files[0];
            if(file) {
                // If there is a file
                let reader = new FileReader();
                reader.onload = ((theFile) => {
                    return (e) => {
                        // console.log(e.target.result);
                        this.setState({src : e.target.result});
                    };
                })(file);
                reader.readAsDataURL(file);
            } else {
                if(this.state.image === undefined || this.state.image === null || this.state.image === '') {
                    // If no file or not in state
                    this.setState({src: "https://via.placeholder.com/300x300?text=No+Image+Available"});
                } else {
                    // If no file but in state
                    this.setState({ src: this.state.image});
                }
            }
    }

    // Submit behaviour
    onSubmit = (e) => {
        // Prevent enter behaviour
            e.preventDefault();

            MySwal.fire({
                // title: 'Delete!',
                text: 'Are you sure you want to upload this recipe?',
                // icon: 'warning',
                focusConfirm: true,
                showDenyButton: true,
                showCloseButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: 'No'
            }).then((result) => {
                if(result.isConfirmed) {
                    postRecipe();

                    MySwal.fire(
                        {
                            text: 'Recipe uploaded',
                            icon: 'success',
                            confirmButtonText: 'Ok',
                        }
                    ).then(() => {
                        // history.push("/saved");
                        this.props.history.push("/saved");
                    });
                } else {
                    // // return MySwal.fire(<p>Nothing s deleted</p>)
                    // return MySwal.fire(
                    //     {
                    //         text: 'Aborted',
                    //         icon: 'error',
                    //         confirmButtonText: 'Ok',
                    //     }
                    // )
                }
            });

            const postRecipe = () => {
                // Data cleanup
                    // Ingredients
                        if(this.state.ingredients === undefined || this.state.ingredients === null) {
                        // if(this.state.ingredients.length > 0) {
                            console.log(this.state.ingredientsTxt);
                            var ingredients = [];
                            var tmpIngredients = this.state.ingredientsTxt.split("\n");
    
                            tmpIngredients.forEach(function(row) {
                                // Separate quantity
                                    if(row.indexOf("[") >= 0 && row.indexOf("]") >= 0) {
                                        // Bracketed (e.g. [1 cup] rice)
                                        var x = row.indexOf("[") + 1;
                                        var y = row.indexOf("]");
                                        var xY = row.substring(x, y)
                                        var quantityTmp = xY.match(/\d+/);
                                        var quantity = quantityTmp && quantityTmp !== null ? parseFloat(quantityTmp[0]) : 0;
                                        var unit = xY.replace(/\d+/g, '').trim();
                                    } else {
                                        // No Brackets (e.g. 1 cup rice)
                                        var quantityTmp = row.match(/\d+/);
                                        var quantity = quantityTmp && quantityTmp !== null ? parseFloat(quantityTmp[0]) : 0;
                                    }
    
                                // Push
                                ingredients.push(
                                    {
                                        "name" : row,
                                        "name_full" : row,
                                        "amount" : {
                                            "quantity" : quantity,
                                            "unit" : unit
                                        }
                                    }
                                )
                            });
                        } else {
                            var ingredients = this.state.ingredients;
                        }

                    // Final
                        let data = JSON.stringify({
                            status: this.state.status,
                            id: this.state.id,
                            title: this.state.title,
                            description: this.state.description,
                            image: this.state.src,
                            ingredients: ingredients,
                            directions: this.state.directions ? this.state.directions.split("\n") : null,  // Convert each line to array
                            duration: parseInt(this.state.duration),
                            servings: parseInt(this.state.servings)
                        });

                // Options
                    var opts = {
                        method: 'POST',
                        // redirect: 'follow',
                        body: data,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/json;charset=UTF-8'
                        },
                    };

                // Post
                    fetch(`/upload`, opts)
                        .then(res => res.json())
                        .then(data => console.log(data));
            }
    }

    render() {
        return (
            <div className={styles["wrapper-main"]}>
                <div className={styles["wrapper-main-header"]}>
                    <button className={styles["btn-back"]}>
                        <Link to="/saved" className={styles["btn-text"]}><FontAwesomeIcon icon={ faArrowLeft }/> Back to recipes</Link>
                    </button>
                    {/* <button className={styles["btn-save"]} onClick={this.onSubmit} onMouseEnter={this.getData}> */}
                    <button className={styles["btn-save"]} onClick={this.onSubmit}>
                        {/* <FontAwesomeIcon icon={ faSave }/> */}
                        {/* SAVE */}
                        {this.state.btnText}
                    </button>
                </div>
                <div className={styles["wrapper-main-body"]}>
                    <div className={styles["wrapper-generic"]}>
                        <label>Title</label>
                        <div className={styles["text-box"]}>
                            <input name="title" value={this.state.title} onChange={this.onChange} type="text" placeholder="What will you name this recipe?" />
                        </div>
                    </div>
                    <div className={styles["wrapper-img"]} style={{ backgroundImage: `url(${this.state.src})` }}>
                        {/* <input id="form-image" type="file" />
                        <input type="button" value="Browse..." onclick="document.getElementById('selectedFile').click();" /> */}
                        
                        <input id="form-image" name="src" type="file" accept="image/*" onChange={this.onChange} />
                        <button id="form-image" className={styles["btn-img"]} onClick={this.getData}>
                            <FontAwesomeIcon icon={ faCameraRetro }/>
                            Add Photo
                        </button>
                        <button className={styles["btn-rem"]} onClick={this.remImage}>
                            <FontAwesomeIcon icon={ faTrash }/>
                        </button>

                        {/* <div className={styles["text-box"]}> */}
                            {/* <input id="form-image" name="image" type="file" accept="image/*" /> */}
                        {/* </div> */}
                    </div>
                    <div className={styles["wrapper-generic"]}>
                        <label>Description</label>
                        <div className={styles["text-area"]}>
                            <textarea
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Tell us about this dish"
                            />
                        </div>
                    </div>
                    <div className={styles["wrapper-generic"]}>
                        <label>Ingredients</label>
                        <div className={styles["text-area"]}>
                            <textarea
                                name="ingredients"
                                value={this.state.ingredientsTxt}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Create new line for each item and enclose quantities in a bracket
                                e.g. [1 cup] rice"
                            />
                        </div>
                    </div>
                    <div className={styles["wrapper-generic"]}>
                        <label>Directions</label>
                        <div className={styles["text-area"]}>
                            <textarea
                                name="directions"
                                value={this.state.directions}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Create new line for each instruction"
                            />
                        </div>
                    </div>
                    <div className={styles["wrapper-generic"]}>
                        <label>Duration</label>
                        <div className={styles["text-box"]}>
                            <input name="duration" value={this.state.duration} onChange={this.onChange} type="number" placeholder="in minutes" />
                        </div>
                    </div>
                    <div className={styles["wrapper-generic"]}>
                        <label>Servings</label>
                        <div className={styles["text-box"]}>
                            <input name="servings" value={this.state.servings} onChange={this.onChange} type="number" placeholder="How many servings does this make?" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default RecipeAdd;