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
        text: "Work",
        href: '/work'
    },
    {
        id: 3,
        icon: <BiLogoLinkedinSquare />,
        text: "LinkedIn",
        href: 'https://www.linkedin.com/in/mildredbrito/',
        target: "_blank",
    },
    {
        id: 4,
        icon: <AiFillGithub />,
        text: "GitHub",
        href: 'https://github.com/millieb',
        target: "_blank",
    },
];