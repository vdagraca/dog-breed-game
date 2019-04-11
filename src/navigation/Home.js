import React, { Component } from 'react';
import './Home.css'
import home from './puppies.jpg'



const Home = () => {
    return (
        <div className="body">
            <h1> Welcome Doglovers! </h1>
            <p>Enter the world of puppies and puppettes,
                learn about breeds and test your knowledge in our
                 Dog Quizzies!</p>
            <img src={home}/>
        </div>

    )

}

export default Home;