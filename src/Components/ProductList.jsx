import React from 'react'

const ProductList = () => {
    const products = [
        {
           id: 1,
           Name: "Phone",
           price: "$699"
        },
        {
            id: 2,
            Name: "Laptop",
            price: "$1200"
        },
        {
            id: 3,
            Name: "Headphone",
            price: "$199"
        }
    ]
  return (
    <div>
        {products.map(({id,Name,price})=>(
            <ul key={id}>
                <li>{id}</li>
                <li>{Name}</li>
                <li>{price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList