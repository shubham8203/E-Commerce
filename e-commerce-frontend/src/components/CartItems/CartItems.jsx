import React, { useContext } from 'react'
import './CartItems.css'
import { shopcontext } from '../../context/ShopContext'
import remove_icon from '../assets/minus.png'
import All_product from '../assets/Ecommerce_Assets/Assets/Frontend_Assets/all_product'

const CartItems = () => {
    const {removeFromCart,all_product,cartItems,getTotalCartAmount,getTotalItems}=useContext(shopcontext);
   

  return (
    <div class='cartitems-container'>
           <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            </div> 
            <hr style={{width:'100%', height:'2px', border:'none',backgroundColor:'#919191',borderRadius:'5px'}}/>
            {
                all_product.map((e,i)=>{
                    
                   if(cartItems[e.id]>0){
                    return (
                        <div key={i}  style={{display:'flex',flexDirection:'column'}}>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='cartitem-product-icon' />
                    <p className='name'>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${
                        (e.new_price)*(cartItems[e.id])
                  }</p>
                    <img src={remove_icon} alt="" onClick={()=>(removeFromCart(e.id))} className='remove-icon' />
                     
                    
                </div>
                <hr style={{width:'100%',border:'none',height:'1px',backgroundColor:'#919191'}}/>
            </div>
                    
                 )
}})
}
            
            <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                  <div className="cartitems-total-item">
                    <p>Sub Total</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className='cartitems-total-item'>
                     <p>Shipping Fee</p>
                     <p>Free</p>
                  </div>
                  <hr />
                  <div className='cartitems-total-item'>
                     <p>Total</p>
                     <p>${getTotalCartAmount()}</p>
                  </div>
                <button>PROCEED TO CHECKOUT</button>
                </div>
                
              </div>
            </div>
            
    </div>
    </div>
    
  )
}

export default CartItems