

export default function Button({text, handleClick,image,className}){
const click = () => {
  handleClick(text)
}
    return(

        <div className="col-xl-2">
          <img className="img-fluid ratio-2x2"aria-disabled="true" src={image} onClick={click}/>
          <h3>{text}</h3>
        </div>

    )
}