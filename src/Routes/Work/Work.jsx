import React from 'react';
import dataXportCareers from '../../assets/DataXportCareersPT1.jpg';
import dataXportCareers2 from '../../assets/DataXportCareersPT2.jpg';
import ticketNotifications from '../../assets/TicketNotifications.png';
import serverChecklist from '../../assets/ServerChecklist.png';

const Work = () => {
    return (
        <div className="information-container flex flex-col relative">
            <div className="w-full flex justify-center">
                <h1 className="mt-4 text-3xl font-extrabold text-custom-salmon text-center md:text-5xl lg:text-6xl">
                    Work
                </h1>
            </div>
            <div className="card-container flex flex-nowrap justify-center overflow-auto">

            <div className="card m-8 p-8 border border-b-black rounded shadow-lg max-w-xs bg-custom-white">
                    <img src={dataXportCareers} alt="Project Image"
                         style={{ height: '200px', objectFit: 'cover' }}
                         className="card-image w-full rounded-t border border-solid rounded-lg max-h-[180px]" />

                    <div className="card-content p-4">
                        <h2 className="card-title text-xl font-bold mb-2">
                            DataXport Careers
                        </h2>
                        <p className="card-description text-gray-700 mb-4">
                            Restructured the career section of the company&apos;s website, which now displays current
                            openings, teams, and mission/vision.
                        </p>
                        <a href="https://jobs.dataxport.net/careers.html" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center
                            uppercase align-middle transition-all bg-transparent border border-solid rounded-lg
                            shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102
                            active:shadow-soft-xs tracking-tight-soft border-custom-blue text-custom-blue
                            hover:border-custom-blue hover:bg-transparent hover:text-custom-blue hover:opacity-75
                            hover:shadow-none active:bg-custom-blue active:text-white active:hover:bg-transparent
                            active:hover:text-custom-blue">
                                View Project
                            </button>
                        </a>
                    </div>
                </div>

                <div className="card m-8 p-8 border border-b-black rounded shadow-lg max-w-xs bg-custom-white">
                <img src={dataXportCareers2} alt="Project Image"
                         style={{ height: '200px', objectFit: 'cover' }}
                         className="card-image w-full rounded-t border border-solid rounded-lg max-h-[180px]" />

                    <div className="card-content p-4">
                        <h2 className="card-title text-xl font-bold mb-2">
                            DataXport Careers 2
                        </h2>
                        <p className="card-description text-gray-700 mb-4">
                            An extension to their Careers website that informs about the responsibilities, benefits,
                            and requirements of the call center position.
                        </p>
                        <a href="https://jobs.dataxport.net/ccinformation.html" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center
                            uppercase align-middle transition-all bg-transparent border border-solid rounded-lg
                            shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102
                            active:shadow-soft-xs tracking-tight-soft border-custom-blue text-custom-blue
                            hover:border-custom-blue hover:bg-transparent hover:text-custom-blue hover:opacity-75
                            hover:shadow-none active:bg-custom-blue active:text-white active:hover:bg-transparent
                            active:hover:text-custom-blue">
                                View Project
                            </button>
                        </a>
                    </div>
                </div>

                <div className="card m-8 p-8 border border-b-black rounded shadow-lg max-w-xs bg-custom-white">
                <img src={ticketNotifications} alt="Project Image"
                         style={{ height: '200px', objectFit: 'cover' }}
                         className="card-image w-full rounded-t border border-solid rounded-lg max-h-[180px]" />

                    <div className="card-content p-4">
                        <h2 className="card-title text-xl font-bold mb-2">
                            Ticket Notifications
                        </h2>
                        <p className="card-description text-gray-700 mb-4">
                            Automated a ticket system to display Windows 10 notifications after a set period,
                            aiming to reduce response times.
                        </p>
                    </div>
                </div>

                <div className="card m-8 p-8 border border-b-black rounded shadow-lg max-w-xs bg-custom-white">
                    <img src={serverChecklist} alt="Project Image"
                         style={{ height: '200px', objectFit: 'cover' }}
                         className="card-image w-full rounded-t border border-solid rounded-lg max-h-[180px]" />

                    <div className="card-content p-4">
                        <h2 className="card-title text-xl font-bold mb-2">
                            Server Checklist
                        </h2>
                        <p className="card-description text-gray-700 mb-4">
                            A Windows application designed to automate the daily process of inspecting
                            the server room, saving the relevant information into an Excel file.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Work;
