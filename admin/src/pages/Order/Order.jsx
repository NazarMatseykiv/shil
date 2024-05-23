import React from 'react'
import './Order.css'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios'
import { assets } from '../../assets/assets';
const Order = ({url}) => {

        const[order,setOrder] = useState([]);
        const getAllOrder = async () =>{
        const response = await axios.get(url+"/api/order/list");
        if(response.data.success)
            {
                setOrder(response.data.data);
                console.log(response.data.data);
            }
            else{
                toast.error("Error")
            }
        }
        useEffect(()=>{
            getAllOrder();
        },[])
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {order.map((order, index)=>
        {
            <div key={index} className="order-item">
                <img src={assets.parcel} alt="" />
                <div>
                    <p className='order-items'>
                        {order.items.map((item, index)=>
                        {
                            if(index===order.items.length-1)
                                {
                                    return item.name + " x " + item.quantity
                                }
                                else{
                                    return item.name + " x " +item.quantity + " , "
                                }
                        })}
                    </p>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Order
