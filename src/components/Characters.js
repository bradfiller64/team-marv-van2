import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Characters.css';
import characterData from '../data/characterData';

console.log('Characters component loaded');

const Characters = () => {
    return (
        <div className='character-screen'>
            <div className="characters">
                <h1 className="characters-heading">Choose Your Character</h1>

                {/* Displaying non-unlockable characters */}
                <Row className="character-grid">
                    {characterData
                        .filter(character => !character.unlockable) // Filtering out unlockable characters
                        .map(character => (
                            <Col key={character.id} style={{ flex: '0 0 14.2857%', maxWidth: '14.2857%' }}> {/* 100% / 7 */}
                                <Link to={`/characters/${character.id}`}>
                                    <Card className="character-card">
                                        <Card.Img variant="top" src={character.icon} alt={character.name} className="character-icon" />
                                        <Card.Body>
                                            <div className="character-name-banner">
                                                <Card.Title className="character-name">{character.name}</Card.Title>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                </Row>

                <h2 className="unlockable-heading">Unlockable Characters</h2>

                {/* Displaying unlockable characters */}
                <Row className="unlockable-grid">
                    {characterData
                        .filter(character => character.unlockable) // Only unlockable characters
                        .map(character => (
                            <Col key={character.id} style={{ flex: '0 0 14.2857%', maxWidth: '14.2857%' }}>
                                <Link to={`/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card className="character-card">
                                        <Card.Img variant="top" src={character.icon} alt={character.name} className="character-icon" />
                                        <Card.Body>
                                            <div className="character-name-banner">
                                                <Card.Title className="character-name">{character.name}</Card.Title>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
};

export default Characters;