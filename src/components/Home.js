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
                <img src={team} alt="team" className="content-image" />
                <p className="content-text">
                    "Marv the Marvelous" and his crew of missionaries are about to embark on the adventure of a lifetime!
                </p>
            </div>
        </div>
    );
};

export default Home;