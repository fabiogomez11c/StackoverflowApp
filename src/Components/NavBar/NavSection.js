import React from 'react'
import { NavLink } from 'react-router-dom'

import "./NavSection.css"

export const NavSection = ({section}) => {
    return (
        <>
            <li className="navbar__button">
                <NavLink 
                    exact to={section.route}
                    activeClassName="active"
                    className="navbar__link"
                >
                    {section.section}
                </NavLink>
            </li>  
        </>
    )
}
