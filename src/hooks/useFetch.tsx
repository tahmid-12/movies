import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url: string) => {
    const [data, setData] = useState<string | null>(null);;
    const [loading, setLoading] = useState<boolean | string>("Loading...");
    const [error, setError] = useState<string | null>(null);;

    useEffect(() => {
        setLoading("Loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
                .then((res) => {
                    setLoading(false);
                    setData(res);
                })
                .catch((err) => {
                    setLoading(false);
                    setError(err);
                });
    },[url]);

    return { data, loading, error };
};

export default useFetch;