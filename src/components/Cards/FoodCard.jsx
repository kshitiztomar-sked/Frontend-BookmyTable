import React from 'react'
import './FoodCard.css'

const FoodCard = () => {
  return (
    <div>
        <div className='Food-Card-box'>
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Food Item" className='Food-Card-image' />
            <div className='Food-Card-content'>
                <h3 className='Food-Card-title'>Delicious Pasta</h3>
                <p className='Food-Card-description'>A classic Italian dish made with fresh ingredients and rich flavors.</p>
                <span className='Food-Card-price'>₹299</span>
            </div>

        </div>
    </div>
  )
}

export default FoodCard