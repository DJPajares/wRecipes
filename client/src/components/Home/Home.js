import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
    const intro = `If you’re considering a vegan lifestyle and loves cooking at home, 
        this is the app for you. From creating your own recipes or 
        downloading one online, to creating your weekly meal planner and grocery lists, 
        this will help you get things started.`;

    const image = "https://images.unsplash.com/photo-1532768641073-503a250f9754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80";

    return (
        <div className="title">
            <h1>Vegan Recipe App</h1>
            <div id="content-box">
                <div className={styles["wrapper-main"]}>
                    <p>{intro}</p>
                    <img className={styles["image"]} src={image} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default Home;