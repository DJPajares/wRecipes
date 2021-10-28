import React, { Component } from 'react';
import styles from './AddRecipe.module.scss';
// import ViewRecipeMinimal from "../../../views/ViewRecipeMinimal"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faSave } from '@fortawesome/free-solid-svg-icons';

export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            ingredients: [],
            directions: [],
            duration: null,
            servings: null
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
       
    onSubmit = (e) => {
        // Prevent enter behaviour
            e.preventDefault();

        // Data cleanup
            // Ingredients
                var tmpIngredients = {
                    "name" : this.state.ingredients,
                    "name_full" : this.state.ingredients
                };
            // Final
                var data = JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    ingredients: [tmpIngredients],
                    directions: this.state.directions.split("\n"),  // Convert each line to array
                    duration: parseInt(this.state.duration),
                    servings: parseInt(this.state.servings)
                });

                console.log(data)

        // Options
            var opts = {
                method: 'POST',
                // redirect: 'follow',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: data
            };

        // Post
            fetch(`/upload`, opts)
                .then(response => {
                    console.log(response.status);
                });

        // Set State
            this.setState({
                title: null,
                description: null,
                ingredients: [],
                directions: [],
                duration: null,
                servings: null
            });
    }

    render() {
        return (
            <div className={styles["wrapper-main"]}>
                <form onSubmit={this.onSubmit}>
                    <div className={styles["wrapper-header"]}>
                        <button className={styles["btn-back"]}>
                            <Link to="/saved" className={styles["btn-text"]}><FontAwesomeIcon icon={ faArrowLeft }/> Back to recipes</Link>
                        </button>
                        <button type="submit" className={styles["btn-save"]}>
                            {/* <FontAwesomeIcon icon={ faSave }/> */}
                            SAVE
                        </button>
                    </div>
                    <div className={styles["wrapper-body"]}>
                        <div className={styles["wrapper-generic"]}>
                            <label>Title</label>
                            <div className={styles["text-box"]}>
                                <input name="title" onChange={this.onChange} type="text" placeholder="What will you name this recipe?" />
                            </div>
                        </div>
                        <div className={styles["wrapper-img"]}>
                            <button className={styles["btn-img"]}>
                                <FontAwesomeIcon icon={ faCameraRetro }/>
                                Add Photo
                            </button>
                        </div>
                        <div className={styles["wrapper-generic"]}>
                            <label>Description</label>
                            <div className={styles["text-area"]}>
                                <textarea name="description" onChange={this.onChange} type="text" placeholder="Tell us about this dish" />
                            </div>
                        </div>
                        <div className={styles["wrapper-generic"]}>
                            <label>Ingredients</label>
                            <div className={styles["text-box"]}>
                                <input name="ingredients" onChange={this.onChange} type="text" placeholder="List down the ingredients here" />
                            </div>
                        </div>
                        <div className={styles["wrapper-generic"]}>
                            <label>Directions</label>
                            <div className={styles["text-area"]}>
                                <textarea name="directions" onChange={this.onChange} type="text" placeholder="Create new line for each instruction" />
                            </div>
                        </div>
                        <div className={styles["wrapper-generic"]}>
                            <label>Duration</label>
                            <div className={styles["text-box"]}>
                                <input name="duration" onChange={this.onChange} type="number" placeholder="in minutes" />
                            </div>
                        </div>
                        {/* <div className={styles["wrapper-generic"]}>
                            <label>Servings</label>
                            <div className={styles["text-box"]}>
                                <input name="servings" onChange={this.onChange} type="number" placeholder="How many servings does this make?" />
                            </div>
                        </div> */}
                    </div>
                </form>
            </div>
        );
    }
}

// export default AddRecipe;