import React, { useState, useEffect } from "react"

export default () => {
    const [mydata, setData] = useState("Default Hello");
    useEffect(() => {
        fetch(`/.netlify/functions/hello?name=from Serverless Function`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);

            });
    }, []);


    return(
        <div>
        <div>
            <h1>{mydata.message}</h1>
        </div>
    </div>
    )
}