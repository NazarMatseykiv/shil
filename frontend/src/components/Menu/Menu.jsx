import React from 'react'
import './Menu.css'
import {menu_list} from '../../assets/assets'

const Menu = ({category, setCategory}) => {
  return (
    <div className='menu' id='menu'>
      <h1>Choose our menu</h1>
      <p className='menu-text'>Choose from a diverse menu featuring</p>
      <div className="menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="menu_list_item" key={index}>
                    <img className={category===item.menu_name?"active":""} src={item.menu_img} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })
        }
      </div>
      <hr />
    </div>
  )
}

export default Menu
