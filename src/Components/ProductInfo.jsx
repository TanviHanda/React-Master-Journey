import React from 'react'

const ProductInfo = () => {
    const product = {
            name:"Laptop",
            price: 1200,
            availability: "In Stock"
}
  return (
    <div>
        <p><strong>Product:</strong> {product.name}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Status:</strong> {product.availability}</p>
    </div>
  )
}

export default ProductInfo