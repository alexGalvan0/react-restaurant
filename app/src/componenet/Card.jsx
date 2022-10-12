function Card({ title, description,price,category }){
    return(
        <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="Card-text"><em>{category}</em></p>
                <p className="Card-text"><strong>{price}</strong></p>

            </div>
        </div>
    )
}

export default Card