import React from 'react'
import "./Product.css"

function ProductCard({data}) {
  return (
    <div className="card-container">

    <div className='card' >
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/"+data.info.cloudinaryImageId} alt="food" />
      <h3>{data.info.name}</h3>
      <h4>{data.info.areaName}</h4>
      <h5>{data.info.cuisines}</h5> 
      <h4>{data.info.avgRating}</h4>
      <h4>{data.info.sla.deliveryTime} min</h4>
      <h3>{data.info.cloudinaryImageId}img</h3> 

    </div>
    </div>
  )
}

export default ProductCard
