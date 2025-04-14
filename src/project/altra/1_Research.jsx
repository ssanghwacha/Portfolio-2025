// src/pages/project/altra/1_Research.jsx
import React from 'react';
import './1_Research.css';

function Research() {
    return (
        <section className="research-section">
            <div className="container">
                <div className="insight-group">
                    <div className="insight-block">
                        <h3 className="insight-title">Problem</h3>
                        <p className="insight-paragraph">
                            <mark>
                                Beginner hikers often struggle to find hiking
                                routes that are both safe and enjoyable. While
                                beautiful trails exist, not all of them are
                                suitable for beginners.
                            </mark>{' '}
                            Some paths may lead to steep or challenging sections
                            if not chosen carefully. Information about
                            accessible trail spots is scattered across platforms
                            like Reddit, blogs, or official websites, which
                            makes it hard to prepare properly. Since mobile
                            internet often doesn’t work well in the mountains,
                            having a reliable and beginner-focused resource is
                            even more important.
                        </p>
                    </div>

                    <div className="insight-block">
                        <h3 className="insight-title">Solution</h3>
                        <p className="insight-paragraph">
                            <mark>
                                Beginner hikers need a simple way to discover
                                the right trails, stay on track, and feel safe
                                while hiking.
                            </mark>{' '}
                            Our app offers clear route suggestions, guidance,
                            and lightweight tools to help them prepare and enjoy
                            the outdoors more confidently. It also features a{' '}
                            <mark>visual, story-based feed</mark> where users
                            can explore trails through photos and tips shared by
                            others.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Research;
