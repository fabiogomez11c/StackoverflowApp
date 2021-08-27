import React from 'react'

import "./User.css"

export const User = ({userName, profileImage, profileLink}) => {
    return (
        <div className="user__info">
            <img 
                alt="user_name user_item" 
                src={profileImage}
                className="user__image"
            />
            <div className="user__name user_item">
                <p>
                    {userName}
                </p>
            </div>
            <div className="user__profile user_item">
                <a href={profileLink}>
                    Profile
                </a>
            </div>
        </div>
    )
}
