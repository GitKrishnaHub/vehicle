import { useEffect, useState } from "react";
import FetchApiData from '../api/FetchApiData'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        FetchApiData(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
