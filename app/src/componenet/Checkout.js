import CartItem from "./CartItem"

export default function Checkout({title, price}){
    return(
        <>
         <ol className="list-group list-group-numbered">
          <CartItem />
          <CartItem />
          <CartItem />
        </ol>
        </>
    )
}