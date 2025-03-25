import React from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <Spline scene="https://prod.spline.design/cFJYynFJHI3d7foK/scene.splinecode" />
            <div className="hero__content">
                <h1>Hi there!</h1>
                <p>I'm Sangwha</p>
            </div>
        </section>
    );
}

export default Hero;
