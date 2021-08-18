import React, { useReducer } from 'react'

import browser__icon from "../../assets/lupa.svg"
import { searchReducer } from './searchReducer'


export const Browser = () => {

    const [inputState, dispatch] = useReducer(searchReducer, "");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputState.trim().length <= 1){
            return;
        }

        const action = {
            type: "enter",
            payload: ""
        };

        dispatch(action);
    }

    const handleInputChange = ({target}) => {
        
        const action = {
            type: "change",
            payload: target.value
        };

        dispatch(action);

    }

    return (
        <div className="browser">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        className="browser__input"
                        autoComplete="off"
                        placeholder="Tell me what's wrong..."
                        value={inputState}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <img 
                alt="browser__icon" 
                src={browser__icon}
                onClick={handleSubmit}
            />
        </div>
    )
}
