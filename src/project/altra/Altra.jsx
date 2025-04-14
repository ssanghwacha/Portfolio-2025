import React from 'react';
import './Altra.css';

// Side Navigation
// import SideBar from './SideBar';

// Sections
import Hero from './Hero'; // 꼭 추가!
import SectionIntro from './SectionIntro';
import Research from './1_Research';
// import Ideation from './2_IdeationAndStructure';
// import UIDesign from './3_UIDesign';
// import Usability from './4_UsabilityTesting';
// import BeforeAfter from './5_BeforeAndAfter';
// import Conclusion from './6_Conclusion';

function Altra() {
    return (
        <div className="altra-container">
            {/* <SideBar /> */}

            <main className="altra-main">
                <Hero />
                <SectionIntro />
                <Research />
                {/* <Ideation />
                <UIDesign />
                <Usability />
                <BeforeAfter />
                <Conclusion /> */}
            </main>
        </div>
    );
}

export default Altra;
