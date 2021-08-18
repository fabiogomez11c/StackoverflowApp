import React, { useState, useReducer } from 'react'

import browser__icon from "../../assets/lupa.svg"
import { createSearchURL } from '../../helpers/createURL'
import { useFetch } from '../../hooks/useFetch'
import { searchReducer } from './searchReducer'


export const Browser = () => {
    
    const [inputState, dispatch] = useReducer(searchReducer, "");
    const [url, setUrl] = useState("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow")
    
    const loading = useFetch(url);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputState.trim().length <= 1){
            return;
        }

        createSearchURL(inputState, setUrl);
        
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
                        placeholder={
                            !loading
                            ? "Loading..."
                            : "Tell me what's wrong..."
                        }
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

// const useFetch = (url) => {

//     const {setData} = useContext(GlobalContext);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         console.log(url)
//         fetch(url)
//             .then(resp => resp.json())
//             .then(respData => {
//                 setData(respData);
//                 setLoading(true);
//             });
//     }, [url])
    
//     return loading;
    
// }