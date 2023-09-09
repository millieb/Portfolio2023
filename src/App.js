import React from 'react';
import SidebarMenu from "./Components/SidebarMenu/SidebarMenu";
import 'tailwindcss/tailwind.css';
const App = () => {
  return (
      <div className="w-full h-screen bg-background-color flex items-center">
      < SidebarMenu />
      </div>
  );
}

export default App;

