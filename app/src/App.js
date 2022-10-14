import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Card from "./componenet/Card";
import Selector from "./componenet/Selector";
import Spinner from "./componenet/Spinner";
import Header from "./componenet/Header";
import Nav from "./componenet/Nav";
import Footer from "./componenet/Footer";

export default function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  const url = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

  useEffect(() => {
    axios.get(url).then((resp) => {
      setData(resp.data);
    });
  }, []);

  const filteredMenu = data.filter((item) => {
    return item.category.title === type;
  });
  //Decrease Menu Amounts to 10 items per category
  let filLowerMen = filteredMenu.slice(0, 9);

  if (data.length === 0)
    return (
      <>
        <div className="App container-fluid text-center">
          <Nav />
          <Header />
          <Spinner />
        </div>
      </>
    );
  return (
    <div className="App container-fluid text-center">
      <Nav />
      <Header />

      <div className="col text-center pb-2" style={{ height: "100vh" }}>
        <div className="row justify-content-center gap-2">
          <Selector
            className="gap-2"
            image={
              "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            text="Breakfast"
            handleClick={setType}
          />

          <Selector
            image={
              "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            text="Lunch"
            handleClick={setType}
          />

          <Selector
            image={
              "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            text="Dinner"
            handleClick={setType}
          />

          <Selector
            image={
              "https://as1.ftcdn.net/v2/jpg/03/01/97/86/1000_F_301978652_O0aPwap1JaEVaAhj3mIlbqNnJGmRyCzC.jpg"
            }
            text="Dessert"
            handleClick={setType}
          />
        </div>
        <div className="row d-flex justify-content-center gap-2 p-5 m-5">
          {filLowerMen.map((d,i) => (
            <Card
              iterable={i}
              data={filLowerMen}
              key={d.id}
              title={d.title}
              category={d.category.title}
              description={d.description}
              price={"$" + d.price}
            />
          ))}
        </div>
        <Footer/>
      </div>
    </div>
  );
}
