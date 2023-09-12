import React from 'react';
import SidebarMenu from "./Components/SidebarMenu/SidebarMenu";
import 'tailwindcss/tailwind.css';
import Home from "./Components/Home/Home";
const App = () => {
  return (
      <div className="w-full h-screen bg-background-color flex items-center">
      < SidebarMenu />
      <Home />
      </div>
  );
}

export default App;

