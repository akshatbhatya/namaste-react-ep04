import React from 'react'
import "./Product.css"

function ProductCard({ data }) {
  let {name,areaName,cuisines,avgRating,cloudinaryImageId}=data?.info;
  let {deliveryTime}=data?.info.sla
  return (
    <div className="card-container">

      <div className='card'  >
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/" + cloudinaryImageId} alt="food" />
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    </div>
  )
}

export default ProductCard
