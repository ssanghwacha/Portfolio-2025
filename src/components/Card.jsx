import React from 'react';
import './Card.css';

function Card({ imageSrc, title, description }) {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="card__image" />
        </div>
    );
}

export default Card;
