import React from 'react'
import "./Product.css"

function ProductCard() {
  return (
    <div className="card-container">

    <div className='card' >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZMaHKjcxIEV3i5-2IImdnH1PlJfCCT7bXQ&usqp=CAU" alt="food" />
      <h3>meghna food</h3>
      <h4>biryani</h4>
      <h5>4.4 star</h5>
      <h5>30 min</h5>

    </div>
    </div>
  )
}

export default ProductCard
