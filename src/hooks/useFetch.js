import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async (url) => {
        setIsLoading(true);
        await fetch(url)
            .then((res)=>{
                return res})
            .then((result) =>{
                setIsLoading(false);
                setData(result)});
    };
    return [data, fetchData, isLoading]
}
export default useFetch;