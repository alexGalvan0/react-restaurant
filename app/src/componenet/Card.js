import Modal from "./Modal";
import Checkout from './Checkout'
import React,{useState} from 'react'

function Card({ title, description, price, category,data,iterable }) {

let spiceLevel = data[iterable].spicy_level
let peppers = '🌶'.repeat(spiceLevel)

let [addBtn, setAddBtn] = useState('Add to cart')
let addedToCart = () =>{
  setAddBtn(addBtn=='Add to cart' ? 'Remove From Cart' : 'Add to cart')
  
  return addBtn == 'Add to cart' ? console.log({title}) : null;
}
  return (

    <div className="card col-4 " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="Card-text">
          <em>{category}</em>
          <p>{peppers}</p>
        </p>
        <p className="Card-text">
          <strong>{price}</strong>
        </p>

        <Modal modalDescription={description} id={data[iterable].id} modalTitle={title} />
        <button type="button" onClick={addedToCart} class="btn btn-danger btn-sm">{addBtn}</button>
      </div>
      
    </div>
  );

}

export default Card;
