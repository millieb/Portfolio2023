import React from 'react';
import {data} from "./Data";
import {Link} from "react-router-dom";



const SidebarData = () => {
    return (
        <div>
            {data.map((d, index) => {
                return (
                    <div key={d.id} className={`sidebar`}>
                        {index >= data.length - 2 ? (
                            <a href={d.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <div className="mr-1.5 text-[1.5rem]">{d.icon}</div>
                                <div className="text-[1rem] whitespace-pre">{d.text}</div>
                            </a>
                        ) : (
                            <Link to={d.href} className="flex items-center">
                                <div className="mr-1.5 text-[1.5rem]">{d.icon}</div>
                                <div className="text-[1rem] whitespace-pre">{d.text}</div>
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarData;