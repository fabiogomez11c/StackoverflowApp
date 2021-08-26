import React from 'react'
import { createTagURL } from '../../helpers/createURL';

import "./Tag.css"

export const Tag = (
    {
        item, 
        urlHandler, 
        btnActivate, 
        btnState
    }) => {

    const handleClick = (e) => {
        e.preventDefault();

        // change the class of the previous one
        document.getElementById(btnState).className = 'tags__btn'

        // update the class of the new one
        e.target.classList.add("clicked")
        const itemName = item.name === "c#" ?
            "c%23"
            : (item.name === "c++" ?
                "c%2B%2B"
                : item.name
            )
        btnActivate(item.name)
        
        // set a new url in order to fetch the correct data
        createTagURL(itemName, urlHandler)
    }

    return (
        <>
            <button 
                onClick={handleClick}
                id={item.name}
                className="tags__btn"
            >
                {item.name}
            </button>
        </>
    )
}
