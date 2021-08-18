import React from 'react'
import { NavSection } from './NavSection'

import stackoverflow from "../../assets/stackoverflow.svg"
import "./NavBar.css"

export const NavBar = () => {
    const sections = [
        {
            section: "Search",
            route  : "/"
        },
        {
            section: "Tags",
            route  : "/tags"
        },
        {
            section: "Top Users",
            route  : "/users"
        }
    ]
    return (
        <>
            <section className="navbar">
                <img 
                    alt="stackoverflow_icon" 
                    src={stackoverflow}
                    className="navbar__icon"
                />
                <ul className="navbar__list">
                    {sections.map((item, idx) => {
                        return <NavSection 
                            section={item} 
                            key={idx}
                        />
                    })}
                </ul>  
            </section>
        </>
    )
}
