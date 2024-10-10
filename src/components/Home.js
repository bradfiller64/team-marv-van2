import React from 'react';
import '../css/Home.css';
import team from '../images/team.jpeg';
import background from '../images/background.jpg';

const Home = () => {
    return (
        <div className="home">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.5,
                }}
            ></div>
            <div className="content-box">
                <h2>Team Marv #2 Van</h2>
                <img src={team} alt="team" className="content-image" />
                <p className="content-text">
                    <b>Join "Marv the Marvelous" and his ragtag crew of missionaries as they embark on an epic
                        excursion to the land of Mexico to save souls and cast out demons.</b>
                </p>
            </div>
        </div>
    );
};

export default Home;