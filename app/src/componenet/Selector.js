export default function Selector({text, handleClick,image}){
const click = () => {
  handleClick(text)
}


    return(

        <div className="col-lg-2 col-md-4">
          <img style={{ cursor: 'pointer'}} className="img-fluid ratio-2x2 rounded"aria-disabled="true" src={image} onClick={click}/>
          <h3 style={{fontWeight:'bolder'}} >{text}</h3>
        </div>

    )
}