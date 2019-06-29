import React from 'react'

const ProductCard = props => {
  const {data} = props
  return (
    <div>
      <img src={data.image} alt={`${data.name} capture`}></img>
      <p>{data.description}</p>
      <p>{data.price}€</p>
    </div>
  )

}

export default ProductCard