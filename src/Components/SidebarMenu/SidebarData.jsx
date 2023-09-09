import React from 'react';
import {data} from "./Data";

const SidebarData = () => {
    return (
        <div>
            {data.map( d => {
                return(
                    <div key={d.id} className={`sidebar`}>
                        <div className="mr-1.5 text-[1.5rem]">{d.icon}</div>
                        <div className="text-[1rem] whitespace-pre">{d.text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default SidebarData;