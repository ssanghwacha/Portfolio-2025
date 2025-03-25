import React from 'react';
import myPhoto from '../assets/my_photo.png';
import './About.css';

function About() {
    return (
        <>
            <main className="about-page">
                <div className="about-content">
                    <h1>
                        I’m Sangwha Cha, a UX/UI designer with a background in
                        brand design.
                    </h1>
                    <p className="about-description">
                        I create digital experiences that not only function
                        seamlessly but also tell a compelling visual story. By
                        merging branding principles with UX thinking, I design
                        interfaces that feel intuitive and visually impactful.
                    </p>
                    <button className="download-cv-btn">Download CV</button>
                </div>
                <div className="about-image">
                    <img src={myPhoto} alt="Sangwha Cha" />
                </div>
            </main>
        </>
    );
}

export default About;
