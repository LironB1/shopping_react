import Product from "./Product"

function Products({products, cart_item}) {
  return (
    <div>Products:
         {/* for product in products:
             return '<Product ' */}
    {products.map(product => <Product key={product.id} product={product} cart_item={cart_item}/>)}


    </div>
  )
}

export default Products