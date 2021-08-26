import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Components/GlobalContext/GlobalContext";

export const useFetch = (url) => {

    const {setData} = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(respData => {
                setData(respData);
                setLoading(true);
            });
    }, [url, setData])
    
    return loading;
    
}

export const useLocalFetch = (url, setFn) => {
    
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(respData => {
                setFn(respData);
                setLoading(true);
            });
    }, [url, setFn])
    
    return loading;
    
}