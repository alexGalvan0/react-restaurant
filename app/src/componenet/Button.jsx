

export default function Button({text, handleClick,image}){
const click = () => {
  handleClick(text)
}
    return(

        <div>
          <img src={image}  onClick={click} width="500" style={{height:"20rem"}}/>
          <h3>{text}</h3>
        </div>

    )
}