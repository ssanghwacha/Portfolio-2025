import React from 'react';
import './Hero.css';
import altraMainHero from '../../assets/altra/altra_main_hero.png'; // ✅ 요거!

function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-logo">ALTRA</div>
            </section>
            <div className="hero-spacer"></div>
            <div className="hero-image-wrapper">
                <img
                    src={altraMainHero}
                    alt="Altra Hero"
                    className="hero-image"
                />
            </div>
        </>
    );
}

export default Hero;
