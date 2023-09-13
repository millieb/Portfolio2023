import React from 'react';
import {data} from "./Data";
import {Link} from "react-router-dom";



const SidebarData = () => {
    return (
        <div>
            {data.map( d => {
                return(
                    <div key={d.id} className={`sidebar`}>
                        <Link to={d.href}>
                            <div className="mr-1.5 text-[1.5rem]">{d.icon}</div>
                            <div className="text-[1rem] whitespace-pre">{d.text}</div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarData;