import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavSection = ({section}) => {
    return (
        <>
            <li className="navbar__button">
                <span className="navbar__section">
                    <NavLink 
                        exact to={section.route}
                        className="navbar__link"
                    >
                        {section.section}
                    </NavLink>
                </span>
            </li>  
        </>
    )
}
