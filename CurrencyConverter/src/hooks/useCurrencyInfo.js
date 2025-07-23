import { useEffect, useState } from "react"; 

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((res) => {
                console.log("API Response:", res);
                setData(res.rates);
            })
            .catch((err) => {
                console.error("Failed to fetch currency data", err);
            });
    }, [currency]);

    return data; 
}

export default useCurrencyInfo;
