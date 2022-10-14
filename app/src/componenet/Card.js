import Modal from "./Modal";

function Card({ title, description, price, category,data,iterable }) {
console.log(data[iterable].id)
  return (

    <div className="card col-4 " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="Card-text">
          <em>{category}</em>
        </p>
        <p className="Card-text">
          <strong>{price}</strong>
        </p>

        <Modal modalDescription={description} id={data[iterable].id} modalTitle={title} />
      </div>
    </div>
  );
}

export default Card;
