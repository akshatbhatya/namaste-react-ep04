import React from 'react'
import Searchbar from '../SearchBar/Searchbar'

import "./Reasturant.css"
import ProductCard from '../Product/ProductCard'

import { ReasturantData } from '../../../Data/ReasturantData'

function Reasturant() {
  return (
    <div className='productContainer'>
      <Searchbar />
      <br />
      <br />

      <div className="product_container_list">

        
         {
          ReasturantData.map((data)=>{
            return <ProductCard data={data} />
          })
         }
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />  */}
      </div>


    </div>
  )
}

export default Reasturant
