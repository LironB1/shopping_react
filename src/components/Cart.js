import { Container, Button, Item, Card } from 'semantic-ui-react';


  function Cart({single_cart_item}) {
  return (

    <div>
      <h1>My Shopping Cart:</h1>
      <h1>{single_cart_item.id}</h1>
      <h1>{single_cart_item.product}</h1>
    </div>
        // // <Container>
        //     {/* <Item.Group relaxed>
        // <Item>
        //   <Item.Image size='small'  src={'http://localhost:8000/static'+ single_cart_item.image} alt={single_cart_item.name} />
        //   <Item.Content verticalAlign='middle'>
        //     <Item.Header>{single_cart_item.name}</Item.Header>
        //     <Item.Description>{single_cart_item.description}</Item.Description>
        //     <Item.Extra>
        //       <h4>{single_cart_item.price}</h4>
        //       <Button floated='right'>Add to quantity</Button>
        //       <Button floated='left'>DELETE</Button>  
        //     </Item.Extra>
        //   </Item.Content>
        // </Item>
        // </Item.Group>

        // </Container> */}
      );
    }

    

  

export default Cart