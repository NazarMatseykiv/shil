import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'
const Order = () => {

  const {getTotalCart} = useContext(StoreContext)
  return (
    <form action="" className='order'>
      <div className="order-left">
        <p className='title'>Order Information</p>
        <div className="multi">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multi">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi">
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="order-right">
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
          <button>Proceed to payment</button>
        </div>
      </div>
    </form>
  )
}
export default Order
