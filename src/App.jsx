import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StyleGuide from './pages/StyleGuide';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Altra from './project/altra/Altra';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="work" element={<Work />} />
                <Route path="contact" element={<Contact />} />
                <Route path="project/altra" element={<Altra />} />
                <Route path="/styleguide" element={<StyleGuide />} />
            </Route>
        </Routes>
    );
}

export default App;
