import React from 'react';
import user from "../../assets/MB.svg";

const UserProfile = () => {
    return (
        <div className="">
            <div className="min-w-[7.5rem] h-[7.5rem]">
                <a href="/" >
                    <img
                        src={user}
                        alt="Logo initials MB"
                        className="w-full h-full rounded-full object-conver"
                    />
                </a>
            </div>
        </div>
    )
}

export default UserProfile;