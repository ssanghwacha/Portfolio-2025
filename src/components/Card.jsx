// Card.jsx
import React from 'react';
import './Card.css';

function Card({ imageSrc, title, description }) {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="card__image" />
            {/* 혹시 타이틀, 설명도 표시하려면 */}
            {/* <div className="card__content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div> */}
        </div>
    );
}

export default Card;
