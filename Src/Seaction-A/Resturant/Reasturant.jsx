import React from 'react'
import Searchbar from '../SearchBar/Searchbar'

import "./Reasturant.css"
import ProductCard from '../Product/ProductCard'

function Reasturant() {
  return (
    <div className='productContainer'>
      <Searchbar />
      <br />
      <br />

      <div className="product_container_list">

        
         <ProductCard data={""} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> 
      </div>


    </div>
  )
}

export default Reasturant
