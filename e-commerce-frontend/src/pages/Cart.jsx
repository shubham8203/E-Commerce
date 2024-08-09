import React,{useContext} from 'react'
import './CSS/Cart.css'
import CartItems from '../components/CartItems/CartItems'
import { shopcontext } from '../context/ShopContext'


const Cart = () => {
  const {getTotalItems}=useContext(shopcontext);
  const total=getTotalItems();
  return (
    <div className='cart'>

      {(total>0)?<div >
        <h2>Cart Description</h2>
        <CartItems/>
        </div>:<div className='empty'>
        <h1 >Your Cart is Empty </h1>
        <p>Add items to the cart </p>
        </div>}

    </div>
  )
}

export default Cart