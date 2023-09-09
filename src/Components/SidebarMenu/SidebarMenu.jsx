import React from 'react';
import UserProfile from "./UserProfile";
import SidebarData from "./SidebarData";
// import {BiChevronLeft} from "react-icons/bi";

const SidebarMenu = () => {
    return (
        <div className={`sidebar-container`}>
            <UserProfile />
            <SidebarData />
            {/*<div className="absolute top-[7rem] flex justify-center*/}
            {/*items-center -left-5 w-10 h-10 bg-glass rounded-full*/}
            {/*cursor pointer" >*/}
            {/*    <BiChevronLeft className="text-3xl"/>*/}
            {/*</div>*/}
        </div>
    );
};

export default SidebarMenu;