import Product from "./Product"

function Products({products, cart, addToCart}) {
  return (
    <div>Products:
         {/* for product in products:
             return '<Product ' */}
    {products.map(product => <Product key={product.id} product={product} cart={cart} addToCart={addToCart}/>)}


    </div>
  )
}

export default Products