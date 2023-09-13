import React from 'react';
import SidebarMenu from "./Components/SidebarMenu/SidebarMenu";
import 'tailwindcss/tailwind.css';

import Home from './Routes/Home/Home';
import About from './Routes/About/About.jsx';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="w-full h-screen bg-custom-purple flex items-center">
                <SidebarMenu />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
