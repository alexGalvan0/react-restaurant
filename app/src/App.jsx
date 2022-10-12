import React, { useEffect, useState } from "react";
import axios from 'axios'
import './App.css'


import Card from "./componenet/Card";
import Button from "./componenet/Button";
import Spinner from "./componenet/Spinner";

export default function App(){

    const [data, setData] = useState([]);
    const [type, setType] = useState('Breakfast');

    const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/'

    useEffect(() => {
        axios.get(url)
          .then((resp) => {
            setData(resp.data);
          })
      }, []);

      const filteredMenu = data.filter((item) =>{
        return item.category.title == type
      })

    if (data.length === 0) return <Spinner />

    return(
        <div className="App container-fluid ">
          <div className="row">
            <div className="col"style={{height:"100vh"}}>
            <Button text='Breakfast' handleClick={setType} />
            <Button text='Lunch' handleClick={setType}/>
            <Button text='Dinner' handleClick={setType}/>
            <Button text='Dessert' handleClick={setType}/>
            {filteredMenu.map((d) => <Card key={d.title} title={d.title} category={d.category.title} description={d.description} price={'$'+d.price} />)}
            </div>
          </div>
        </div>
    )
}