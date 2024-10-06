import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../css/Characters.css';
import characterData from '../data/characterData';

const Characters = () => {
    return (
        <div className="characters">
            <h1 className="characters-heading">Choose Your Character</h1>

            {/* Displaying non-unlockable characters */}
            <Row className="character-grid">
                {characterData
                    .filter(character => !character.unlockable) // Filtering out unlockable characters
                    .map(character => (
                        <Col xs={12} sm={6} md={4} lg={3} key={character.id}>
                            <Card className="character-card">
                                <Card.Img variant="top" src={character.icon} alt={character.name} className="character-icon" />
                                <Card.Body>
                                    <Card.Title className="character-name">{character.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>

            <h2 className="unlockable-heading">Unlockable Characters</h2>

            {/* Displaying unlockable characters */}
            <Row className="unlockable-grid">
                {characterData
                    .filter(character => character.unlockable) // Only unlockable characters
                    .map(character => (
                        <Col xs={12} sm={6} md={4} lg={3} key={character.id}>
                            <Card className="character-card">
                                <Card.Img variant="top" src={character.icon} alt={character.name} className="character-icon" />
                                <Card.Body>
                                    <Card.Title className="character-name">{character.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default Characters;