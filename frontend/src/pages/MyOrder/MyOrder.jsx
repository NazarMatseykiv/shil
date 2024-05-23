import React, { useContext, useState } from 'react'
import './MyOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

import { assets } from '../../assets/assets';
const MyOrder = () => {

    const {url, token} = useContext(StoreContext);
    const [data, setData] = useState([]);

    const getOrder = async () => {
        const response = await axios.post(url+"/api/order/userorder", {},{headers:{token}})
        setData(response.data.data);
    }
  return (
    <div className='my-order'>
        <h2>My Order</h2>
        <div className='container'>
            {data.map((order, index)=>{
            return(
                <div key={index} className='my-order-order'>
                    <img src={assets.parcel} alt="" />
                    <p>{order.items.map((item, index)=>
                    {
                        if (index === order.items.length-1) {
                            return item.name+" x "+item.count
                        }
                    })}</p>
                </div>
            )
        })}
        </div>  
    </div>
  )
}

export default MyOrder
