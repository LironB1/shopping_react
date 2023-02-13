
import Cart from "./Cart"
function CartItem({cart_items}) {
  return (
    <div>
        {cart_items.map(single_cart_item => <Cart key={single_cart_item.id} single_cart_item={single_cart_item}/>)}


    </div>
  )
}

export default CartItem