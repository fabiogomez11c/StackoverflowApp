import React, { useContext, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import { Cards } from '../Search/Cards'

export const Tags = () => {
    
    const {data} = useContext(GlobalContext)
    
    const [url, setUrl] = useState("https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow")
    const loading = useFetch(url);
    
    return (
        <div>
            <div className="tags">
                {
                    (!loading) ? <p>{"Loading..."}</p>
                    : data.items.slice(0, 5).map((item) => {
                        return (<button key={item.name}>{item.name}</button>)
                    })
                }
            </div>
            {/* <Cards/> */}
        </div>
    )
}
