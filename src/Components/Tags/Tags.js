import React, { useState } from 'react'
import { useFetch, useLocalFetch } from '../../hooks/useFetch'
import { Cards } from '../Search/Cards'
import { Tag } from './Tag'

import "./Tags.css"

export const Tags = () => {
    
    const [activeBtn, setActiveBtn] = useState("python");
    const [url, setUrl] = useState(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&tagged=${activeBtn}&site=stackoverflow`);
    
    useFetch(url);

    const [tagState, setTagState] = useState({});
    const loadingTags = useLocalFetch(
        "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow",
        setTagState
    );
    
    return (
        <div className="tag-section">
            <div className="tags">
                {
                    (!loadingTags) ? <p>{"Loading..."}</p>
                    : tagState.items.slice(0, 10).map((item) => {
                        return (<Tag
                            key={item.name}
                            item={item}
                            urlHandler={setUrl}
                            btnActivate={setActiveBtn}
                            btnState={activeBtn}
                        />)
                    })
                }
            </div>
            <Cards/>
        </div>
    )
}
