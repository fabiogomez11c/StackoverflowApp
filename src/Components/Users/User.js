import React from 'react'

import "./User.css"

export const User = ({userName, profileImage}) => {
    return (
        <div className="user__info">
            <img alt="user_name" src={profileImage}/>
            <div className="user__name">
                <p>
                    {userName}
                </p>
            </div>
            <div className="user__profile">
                <a href="https://www.google.com">
                    Profile
                </a>
            </div>
        </div>
    )
}
