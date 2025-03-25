import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import './Work.css';

import workImg1 from '../assets/Home/2sec_main.png';
import workImg2 from '../assets/Home/Altra_main.png';
import workImg3 from '../assets/Home/BeeHere_main.png';
import workImg4 from '../assets/Home/BGZT_main.png';
import workImg5 from '../assets/Home/onesq_main.png';
import workImg6 from '../assets/Home/velot_main.png';

function Work() {
    return (
        <main className="work-page">
            {/* Hero Section */}
            <section className="work-hero">
                <Spline scene="https://prod.spline.design/BDa6y8nR0-1JwKgB/scene.splinecode" />
            </section>

            {/* Works Grid */}
            <section className="works-section">
                <h2>Works</h2>
                <div className="works-grid">
                    <div className="work-item">
                        <Link to="#" className="card-link">
                            <img src={workImg1} alt="Altra" />
                            <div className="work-info">
                                <p>2sec</p>
                                <span className="tag">Branding</span>
                            </div>
                        </Link>
                    </div>
                    <div className="work-item">
                        <Link to="#" className="card-link">
                            <img src={workImg2} alt="2 Seconds" />
                            <div className="work-info">
                                <p>Altra</p>
                                <span className="tag">UXUI</span>
                            </div>
                        </Link>
                    </div>
                    <div className="work-item">
                        <Link to="#" className="card-link">
                            <img src={workImg6} alt="Velot" />
                            <div className="work-info">
                                <p>Velot</p>
                                <span className="tag">UXUI</span>
                            </div>
                        </Link>
                    </div>
                    <div className="work-item">
                        <Link to="#" className="card-link">
                            <img src={workImg3} alt="Bee Here" />
                            <div className="work-info">
                                <p>Bee Here</p>
                                <span className="tag">UXUI</span>
                            </div>
                        </Link>
                    </div>
                    <div className="work-item">
                        <Link to="#" className="card-link">
                            <img src={workImg4} alt="BGZT" />
                            <div className="work-info">
                                <p>BGZT</p>
                                <span className="tag">UXUI</span>
                            </div>
                        </Link>
                    </div>
                    <div className="work-item">
                        <Link to="#" className="card-link">
                            <img src={workImg5} alt="Onesquare Book store" />
                            <div className="work-info">
                                <p>Onesquare Book store</p>
                                <span className="tag">UXUI</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Work;
