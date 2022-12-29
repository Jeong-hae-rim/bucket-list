import { useEffect, useState } from "react";


export const useFetch = (mockUpData) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(mockUpData, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setData(Object.values(myJson));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [mockUpData]);

    return data;

}
