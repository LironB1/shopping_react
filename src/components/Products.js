import Product from "./Product"

function Products({products, deleteProduct}) {
  return (
    <div>Products:
         {/* for product in products:
             return '<Product ' */}
    {products.map(product => <Product key={product.id} product={product} deleteProduct={deleteProduct}/>)}


    </div>
  )
}

export default Products