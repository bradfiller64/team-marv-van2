import React from 'react';
import team from '../images/team.jpeg';

function Home() {
    return (
        <div>
            <h1>Team Marv #2 Van</h1>
            <img src={team} alt="TeamPhoto" style={{ width: 'auto', height: 'auto' }} />
            <h2>"Marv the Marvelous" and his crew are about to embark on the mission of a lifetime!</h2>
        </div>
    );
}

export default Home;