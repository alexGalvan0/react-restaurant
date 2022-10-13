export default function Selector({image,text}){
    return(
        <div className="col">
            <img src={image} className="bd-placeholder-img rounded-circle" width="500" height="500"/>

            <h2 className="fw-normal">{text}</h2>
      </div>
    )
}