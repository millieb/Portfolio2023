import React from 'react';
import UserProfile from "./UserProfile";
import SidebarData from "./SidebarData";

const SidebarMenu = () => {
    return (
        <div className={`sidebar-container`}>
            <UserProfile />
            <SidebarData />

        </div>
    );
};

export default SidebarMenu;