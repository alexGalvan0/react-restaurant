import React, { useEffect, useState } from "react";
import axios from 'axios'
import './App.css'


import Card from "./componenet/Card";
import Button from "./componenet/Button";
import Spinner from "./componenet/Spinner";
import Header from "./componenet/Header"

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
        <div className="App container-fluid text-center">
          <Header />
          
            <div className="col text-center"style={{height:"100vh"}}>
            <Button text='Breakfast' handleClick={setType} />
            <Button text='Lunch' handleClick={setType}/>
            <Button text='Dinner' handleClick={setType}/>
            <Button text='Dessert' handleClick={setType}/>
            <div className="d-flex justify-content-center">
            <div className="row">
              {filteredMenu.map((d) => <Card key={d.id} title={d.title} category={d.category.title} description={d.description} price={'$'+d.price} />)}
            </div>
            </div>
          </div>
        </div>
    )
}