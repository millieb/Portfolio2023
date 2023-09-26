import React from 'react';
import SidebarMenu from "./Components/SidebarMenu/SidebarMenu";
import 'tailwindcss/tailwind.css';

import Home from './Routes/Home/Home';
import About from './Routes/About/About.jsx';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Work from "./Routes/Work/Work";

const App = () => {
    return (
        <Router>
            <div className="w-full h-screen bg-custom-purple flex items-start">
            <SidebarMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
