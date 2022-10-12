 export default function Button({text, handleClick}){
const click = () => {
  handleClick(text)
}
    return(
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={click} type="button" className="btn btn-primary">{text}</button>
      </div>
    )
}