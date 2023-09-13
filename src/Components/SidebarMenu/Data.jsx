import React from 'react';
import {BiLogoLinkedinSquare} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";

export const data = [
    {
        id: 1,
        text: "About",
        href: '/about'
    },
    {
        id: 2,
        text: "Skills",
        href: '/skills'
    },
    {
        id: 3,
        text: "Work",
        href: '/work'
    },
    {
        id: 4,
        text: "Contact",
        href: '/contact'
    },
    {
        id: 5,
        icon: <BiLogoLinkedinSquare />,
        text: "LinkedIn",
        href: 'https://www.linkedin.com/in/mildredbrito/'
    },
    {
        id: 6,
        icon: <AiFillGithub />,
        text: "GitHub",
        href: 'https://github.com/millieb'
    },
];