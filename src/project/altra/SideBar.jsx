import React from 'react';
import './SideBar.css';

function SideBar() {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <a href="#research">Research</a>
                </li>
                <li>
                    <a href="#ideation">Ideation & Structure</a>
                </li>
                <li>
                    <a href="#ui">UI Design</a>
                </li>
                <li>
                    <a href="#usability">Usability Testing</a>
                </li>
                <li>
                    <a href="#beforeafter">Before & After</a>
                </li>
                <li>
                    <a href="#conclusion">Conclusion</a>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;
