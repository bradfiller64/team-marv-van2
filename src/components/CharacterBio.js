import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/CharacterBio.css'; // Assuming you'll style it in a separate CSS file
import characterData from '../data/characterData'; // Import character data

const CharacterBio = () => {
    const { id } = useParams(); // This retrieves the character ID from the URL params
    const character = characterData.find(char => char.id === parseInt(id)); // Find the character by ID

    return (
        <div className="character-bio-container">
            <h1 className="character-name">{character.name}</h1>
            <p className="character-quote">"{character.quote}"</p>

            <div className="character-card">
                <img src={character.photo} alt={character.name} className="character-photo" />
                <div className="character-description-banner">
                    <p className="character-description">{character.description}</p>
                </div>
            </div>

            {character.unlockable && (
                <div className="unlock-info">
                    <h2 className="how-to-unlock-title">How to Unlock</h2>
                    <p className="how-to-unlock">{character.howToUnlock}</p>
                </div>
            )}
        </div>
    );
};

export default CharacterBio;