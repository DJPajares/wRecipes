import React, { Component } from 'react';
import styles from './RecipeAdd.module.scss';
// import ViewRecipeMinimal from "../../../views/ViewRecipeMinimal"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faSave } from '@fortawesome/free-solid-svg-icons';

export default class RecipeAdd extends Component {
    constructor() {
        super();
        this.state = {
            src: '',    // image source
            title: null,
            description: null,
            ingredients: [],
            directions: [],
            duration: null,
            servings: null
        };
        this.getData = this.getData.bind(this);
    }

    // On element value change, save its state
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Save button hover mouse listener - adds delay on image retrieval (doesn't work if directly processed on onSubmit)
    getData = () => {
        // Set Image
            let file = document.getElementById('form-image').files[0];
            if(file) {
                let reader = new FileReader();
                reader.onload = ((theFile) => {
                    return (e) => {
                        // console.log(e.target.result);
                        this.setState({src : e.target.result});
                    };
                })(file);
                reader.readAsDataURL(file);
                // console.log(this.state.src);
            } else {
                // If no image, use placeholder
                this.setState({src: "https://via.placeholder.com/150x150"});
            }
    }

    // Submit behaviour
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
                let data = JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    image: this.state.src,
                    ingredients: [tmpIngredients],
                    directions: this.state.directions.length > 0 ? this.state.directions.split("\n") : null,  // Convert each line to array
                    duration: parseInt(this.state.duration),
                    servings: parseInt(this.state.servings)
                });

                console.log(data)

        // // Reset fields from state
        //     this.setState({
        //         src: '',
        //         title: null,
        //         description: null,
        //         ingredients: [],
        //         directions: [],
        //         duration: null,
        //         servings: null
        //     });

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

        // // Alert
        //     alert("Upload successful!");
    }

    render() {
        return (
            <div className={styles["wrapper-main"]}>
                <div className={styles["wrapper-header"]}>
                    <button className={styles["btn-back"]}>
                        <Link to="/saved" className={styles["btn-text"]}><FontAwesomeIcon icon={ faArrowLeft }/> Back to recipes</Link>
                    </button>
                    <button className={styles["btn-save"]} onClick={this.onSubmit} onMouseEnter={this.getData}>
                        {/* <FontAwesomeIcon icon={ faSave }/> */}
                        SAVE
                    </button>
                </div>
                {/* <form onSubmit={this.onSubmit}> */}
                {/* <form> */}
                    <div className={styles["wrapper-body"]}>
                        <div className={styles["wrapper-generic"]}>
                            <label>Title</label>
                            <div className={styles["text-box"]}>
                                <input name="title" onChange={this.onChange} type="text" placeholder="What will you name this recipe?" />
                            </div>
                        </div>
                        <div className={styles["wrapper-img"]}>
                            {/* <button id="form-image" className={styles["btn-img"]}>
                                <FontAwesomeIcon icon={ faCameraRetro }/>
                                Add Photo
                            </button> */}
                            <div className={styles["text-box"]}>
                                <input id="form-image" name="image" type="file" accept="image/*" />
                            </div>
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
                {/* </form> */}
            </div>
        );
    }
}

// export default RecipeAdd;