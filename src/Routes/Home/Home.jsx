import React from 'react';
import homeImage from "../../assets/svg-1.svg";

const Home = () => {
    return (
        <div className="information-container flex relative">
            <div className="flex flex-col flex-grow items-center justify-center text-center">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    Hi, I&apos;m Mildred Brito
                </h1>
                <div className="text-3xl font-bold dark:text-white">
                    Full Stack Developer
                </div>
            </div>
            <div className="absolute inset-0 grid place-items-end p-4">
                <img
                    src={homeImage}
                    alt="Home image woman on computer"
                    className="w-[25rem] h-[25rem] object-cover"
                />
            </div>
        </div>
    );
};




export default Home;