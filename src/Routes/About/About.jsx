import React from 'react';

const About = () => {
    return (
        <div className="information-container flex relative">
            <div className="flex flex-col flex-grow justify-center">
                <h1 className="mb-4 text-3xl font-extrabold text-custom-salmon text-left md:text-5xl lg:text-6xl">
                    About
                </h1>
                <div className="text-2xl font-bold dark:text-white text-left text-justify">
                    As a software developer with experience in JavaScript/ReactJS and Java/Spring boot,
                    I am very passionate about leveraging my programming experience to develop innovative software
                    solutions. I am committed to continuously expanding my knowledge and staying up to date with the
                    latest industry trends to deliver high-quality, efficient, and reliable software. I thrive in
                    collaborative environments and I am excited to work with diverse teams to create impactful solutions.
                </div>
                <div className="text-2xl dark:text-white text-left mt-6">
                    Contact: mildred.brito@outlook.com
                </div>
            </div>
        </div>
    );
};

export default About;