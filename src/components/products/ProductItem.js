import React from 'react'
import "./ProductItem.css"

export const ProductItem = (props) => {
  return (
    <>
    <div className='product-item'>
    <h3 style={{marginBottom:'2rem'}}>{props.title}</h3>
    <img src={props.image}></img>

     <div className='product-item-details'>
     <p>${props.price}</p>
     <button className='add-to-cart'>Add to cart</button>
     </div>
   


    </div>
   
    
    </>
  )
}
