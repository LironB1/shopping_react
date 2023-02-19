
import Cart from "./Cart"

function CartItem({cart, removeItem,  updateQuantity, updatedCart }) {

  return (
    <div>
        {cart.map(single_cart_item => <Cart key={single_cart_item.id} single_cart_item={single_cart_item} removeItem={removeItem} updateQuantity={updateQuantity} updatedCart={updatedCart}/>)}


    </div>
  )
}

export default CartItem