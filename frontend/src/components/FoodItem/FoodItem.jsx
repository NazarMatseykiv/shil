import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id, name, price, description, image}) => {
    
    const {cartItems, addCart, removeCart, url} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img src={url+"/images/"+image} alt="" className="food-item-image"/>
            {
                !cartItems[id] ? <img src={assets.addw} className='add' onClick={()=>addCart(id)}alt=""/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeCart(id)} src={assets.remove} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addCart(id)} src={assets.addg} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
