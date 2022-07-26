import React from 'react'
import "./MainCard.css"
import { MainCarditem } from './MainCarditem'
import { Modal } from '../UI/Modal'
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    

export const MainCard = (props) => {
  return (
    <>
    <div className='closemodal-content'>
        <button className='closemodal' onClick={props.onclose}>x</button>
    </div>
    <table className='maincard-table'>
        <tr className='maincard-headrow'>
            <th style={{textAlign:'left'}}>item
            <hr style={{width:'10rem'}}></hr>
            </th>
            <th>price
            <hr style={{width:'100%'}}></hr> 
            </th>
            <th className='main-headrow-quantity'>quantity
            
            <hr style={{width:'100%'}}></hr>
            </th>
        </tr>
        
    </table>
    {
        cartElements.map((element)=> {
            return (
                
                <tr>
                <MainCarditem 
                title={element.title}
                price={element.price}
                image={element.imageUrl}
                quantity={element.quantity} 
               
                />
                 </tr>
                


            )
        })
    }
    

    </>
  )
}
