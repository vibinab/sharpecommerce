import React from 'react'
import "./Card.css"

export const Card = (props) => {
  return (
    <div><button type="button" className="cart-show-button"onClick={props.oncartclick}>card</button> <span className='cart-number'>0</span></div>
  )
}
