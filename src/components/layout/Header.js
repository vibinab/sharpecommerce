import React from 'react'
import  "./Header.css"
import { Card } from '../Card/Card'

export const Header = (props) => {
  return (
    <>
        <div className='header'>
            <div className='header-content'>
                <span>HOME</span>
                <span>STORE</span>
                <span>ABOUT</span>

               
              
                
            </div>
           
        </div>
        
        <span className='header-cart'><Card oncartclick={props.onshowcart}/></span>
        <div className='header-content2'>
            <h1>The Generics</h1>
        </div>
        <h1 style={{textAlign:'center'}}>MUSIC</h1>
    </>
  )
}
