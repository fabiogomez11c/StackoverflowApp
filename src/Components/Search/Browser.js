import React from 'react'

import browser__icon from "../../assets/lupa.svg"

export const Browser = () => {
    return (
        <div className="browser">
            <form>
                <div className="browser__input">
                    <input 
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </form>
            <img 
                alt="browser__icon" 
                src={browser__icon}
            />
        </div>
    )
}
