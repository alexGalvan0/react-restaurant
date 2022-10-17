import Modal from "./Modal";


function Card({ title, description, price, category, data, iterable, }) {
  let spiceLevel = data[iterable].spicy_level;
  let peppers = "🌶".repeat(spiceLevel);


  return (
    <div className="card col-4 " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="Card-text">
          <em>{category}</em>
          <p>{peppers}</p>
        </div>
        <div className="Card-text">
          <strong>{price}</strong>
        </div>

        <Modal
          modalDescription={description}
          id={data[iterable].id}
          modalTitle={title}
        />
      </div>
    </div>
  );
}

export default Card;
