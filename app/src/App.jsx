import React, { useEffect, useState } from "react";
import axios from 'axios'
import './App.css'


import Card from "./componenet/Card";
import Nav from "./componenet/Nav";
import Spinner from "./componenet/Spinner";

export default function App(){

    const [data, setData] = useState([]);
    const [page, setPage] = useState('Dinner');

    const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/'

    useEffect(() => {
        axios.get(url)
          .then((resp) => {
            setData(resp.data);
          })
      }, []);

      const dinMenu = data.filter((item) =>{
        return item.category.title == page
      })

    if (data.length === 0) return (
      <div className="App container-fluid border">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center "style={{height:"100vh"}}>
          <Spinner />
        </div>
      </div>
    </div>
    )

    if(page == 'Dinner') return(
        <div className="App container-fluid ">
          <div className="row">
            <div className="col"style={{height:"100vh"}}>
            {dinMenu.map((d) => <Card key={d.title} title={d.title} category={d.category.title} description={d.description} price={'$'+d.price} />)}
            </div>
          </div>
        </div>
    )
}