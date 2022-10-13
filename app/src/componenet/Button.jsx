

export default function Button({text, handleClick,image}){
const click = () => {
  handleClick(text)
}
    return(

        <div className="gap-2">
          <img className="pe-auto"aria-disabled="true" src={image} onClick={click} width="500" style={{height:"15rem",width:"20rem"}}/>
          <h3>{text}</h3>
        </div>

    )
}