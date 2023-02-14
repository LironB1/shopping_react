import { useState } from 'react';
import { ListGroupItem, Row,Form,Col } from 'react-bootstrap';
import { Container, Button, Item } from 'semantic-ui-react'


function Product({product, history}) {
  const [qty, setQty] = useState(1)

  const addToCartHandler =()=>{
    history.push(`/cart/${product.params.id}?qty=${qty}`)
  }
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
          <Button onClick={addToCartHandler} disabled={product.countInStock === 0} floated='lefr' href="/cart">Add To Cart</Button>
          {product.countInStock > 0 &&(
          <ListGroupItem>
            <Row>
              <Col xs='auto' className='my-1'>
              <Form.Control
               as="select" value={qty}
               onChange={(e) => setQty(e.target.value)}
               >{
                [...Array(product.countInStock).keys()].map((x)=>(
                  <option key={x+1} value={x+1}>
                    {x+1}
                  </option>
                ))
               }
               </Form.Control>
              </Col>
            </Row>
          </ListGroupItem>
          )}
          <Button floated='left'>DELETE</Button>  
        </Item.Extra>
      </Item.Content>

    </Item>
    </Item.Group>
    
    </Container>
  );
}

  
export default Product