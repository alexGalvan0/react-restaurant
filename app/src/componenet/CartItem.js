export default function CartItem ({title, price}){
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {price}
        </div>
        {/* <span className="badge bg-dark rounded-pill">14</span> */}
      </li>
    )
}