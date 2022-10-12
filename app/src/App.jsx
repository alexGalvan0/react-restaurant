import React, { useEffect, useState } from "react";
import axios from 'axios'
import Card from "./componenet/Card";

export default function App(){

    const [data, setData] = useState([])

    const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/'

    useEffect(() => {
        axios.get(url)
          .then((resp) => {
            setData(resp.data);
            console.log(resp)
          })
      }, []);

    if (data.length === 0) return null

    return(
        <div className="App">
                {data.map((d) => <Card key={d.title} title={d.title} description={d.description} price={'$'+d.price} />)}
        </div>
    )
}