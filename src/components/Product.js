import { Container, Button, Item } from 'semantic-ui-react'

function Product({product}) {
  return (
    <Container>
        <Item.Group relaxed>
    <Item>
      <Item.Image size='small'  src={'http://localhost:8000/static'+product.image} alt={product.name} />

      <Item.Content verticalAlign='middle'>
        <Item.Header>{product.name}</Item.Header>
        <Item.Description>{product.description}</Item.Description>
        <Item.Extra>
          <h4>{product.price}</h4>
          <Button floated='right'>Add To Cart</Button>
          <Button floated='left'>DELETE</Button>  
        </Item.Extra>
      </Item.Content>

    </Item>
    </Item.Group>
    
    </Container>
  );
}

  
export default Product