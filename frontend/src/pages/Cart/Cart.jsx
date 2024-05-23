import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const{cartItems, food_list, removeCart, getTotalCart} = useContext(StoreContext);

  const nav = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Count</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>
        {
          if(cartItems[item._id]>0)
            {
              return(
                <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
                </div>
              )
            }
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-details'>
              <p>Subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <div className='cart-details'>
              <p>Order</p>
              <p>${getTotalCart()===0?0:2}</p>
            </div>
            <div className='cart-details'>
              <b>Total</b>
              <b>${getTotalCart()===0?0:getTotalCart()+2}</b>
            </div>
          </div>
          <button onClick={()=>nav('/order')}>Proceed to checkout</button>
        </div>
        <div className="cart-promo">
          <div>
            <p>Enter promocode here</p>
            <div className='cart-promo-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
