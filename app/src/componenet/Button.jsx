import'./button.css'

export default function Button({text, handleClick,image}){
const click = () => {
  handleClick(text)
}
    return(

        <div className="col-lg-2 col-md-4">
          <img className="img-fluid ratio-2x2"aria-disabled="true" src={image} onClick={click}/>
          <h3>{text}</h3>
        </div>

    )
}