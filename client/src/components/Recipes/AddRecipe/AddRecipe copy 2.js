import React, { Component } from 'react';
import styles from './AddRecipe.module.scss';
// import ViewRecipeMinimal from "../../../views/ViewRecipeMinimal"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export default class AddRecipe extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         src: '',
    //         title: '',
    //         postData: false
    //     }
    //     this.sendData = this.sendData.bind(this);
    // }

    sendData() {
        console.log('start')
        // let{ postData } = this.state;

        // if(postData) {
            // This object contains all the data entered including the image as base64
            let obj = {
                title: document.getElementById('form-title').value,
                // image: this.state.src,
                description: document.getElementById('form-description').value,
                ingredients: document.getElementById('form-ingredients').value,
                directions: document.getElementById('form-directions').value,
                servings: document.getElementById('form-servings').value
            };

            // this.props.getNewRecipe(obj);

            var val = JSON.stringify({
                title: obj.title,
                // image: obj.image,
                description: obj.description,
                ingredients: obj.ingredients,
                directions: obj.directions,
                servings: obj.servings
            });

            console.log(val);

            // // Reset input fields and the image src within the state
            // document.getElementById('form-title').value = '';
            // // this.setState({ src: '' });
            // document.getElementById('form-description').value = '';
            // document.getElementById('form-ingredients').value = '';
            // document.getElementById('form-directions').value = '';
            // document.getElementById('form-servings').value = '';

            // // Send the data
            // // Live server
            // fetch('https://react-recipe-app-19.herokuapp.com/upload', {
            //     method: 'post',
            //     redirect: 'follow',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     // Turn the object to json
            //     body: JSON.stringify({
            //         title: obj.title,
            //         // image: obj.image,
            //         description: obj.description,
            //         ingredients: obj.ingredients,
            //         directions: obj.directions,
            //         servings: obj.servings
            //     })
            // })
            // .then((res) => {
            //     // A message to let me know that the data has been sent
            //     console.log('Data sent!');       
            // });
        // }
    }

    render() {
        return (
            <div className={styles["wrapper-main"]}>
                <div className={styles["wrapper-header"]}>
                </div>
                <div className={styles["wrapper-body"]}>
                    <form>
                    <button className={styles["btn-back"]}>
                        <Link to="/saved" className={styles["btn-text"]}><FontAwesomeIcon icon={ faArrowLeft }/> Back to recipes</Link>
                    </button>
                    <button type="submit" className={styles["btn-save"]} onClick={this.sendData}>
                        {/* <FontAwesomeIcon icon={ faSave }/> */}
                        SAVE
                    </button>
                        <div className={styles["wrapper-header"]}>
                        </div>
                        <div className={styles["wrapper-body"]}>
                            <div className={styles["wrapper-generic"]}>
                                <label>Title</label>
                                <div className={styles["text-box"]}>
                                    <input id="form-title" type="text" placeholder="What will you name this recipe?" />
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
                                    <textarea id="form-description" type="text" placeholder="Tell us about this dish" />
                                </div>
                            </div>
                            <div className={styles["wrapper-generic"]}>
                                <label>Ingredients</label>
                                <div className={styles["text-box"]}>
                                    <input id="form-ingredients" type="text" placeholder="List down the ingredients here" />
                                </div>
                            </div>
                            <div className={styles["wrapper-generic"]}>
                                <label>Directions</label>
                                <div className={styles["text-box"]}>
                                    <input id="form-directions" type="text" placeholder="Add some instructions" />
                                </div>
                            </div>
                            <div className={styles["wrapper-generic"]}>
                                <label>Servings</label>
                                <div className={styles["text-box"]}>
                                    <input id="form-servings" type="text" placeholder="How many servings does this make?" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// export default AddRecipe;