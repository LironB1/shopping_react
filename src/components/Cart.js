import { Container, Button } from 'semantic-ui-react';
// import Products from './Products';
import {  useState } from "react";
import UpdateCartQty from './UpdateCartQty';


  function Cart({single_cart_item, updateQuantity,removeItem}) {
    const [showUpdateQuantity, setShowUpdateQuantity] = useState(false);

  return (

    <div>
      <h1>{single_cart_item.id}</h1>
      <h1>{single_cart_item.product}</h1>
      <h1>{single_cart_item.quantity}</h1>

      <Button variant="light" onClick={() => {setShowUpdateQuantity(!showUpdateQuantity)}}> {showUpdateQuantity ? "Close" : "Update Quantity"} </Button>
          {showUpdateQuantity && <UpdateCartQty pk={single_cart_item.id} updateQuantity={updateQuantity} />}
          {!showUpdateQuantity &&<Button variant="info" onClick={()=>removeItem(single_cart_item.id)} > Remove </Button>}
    </div>

      );
    }

    

  

export default Cart