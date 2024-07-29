import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import './navbar.css'
import logo from '../assets/image.png'
import cart from '../assets/cart.webp'
import { Link } from 'react-router-dom'
import { shopcontext } from '../../context/ShopContext'
import search_icon from '../assets/Ecommerce_Assets/Assets/Frontend_Assets/search_icon.png'
import profile_icon from '../assets/profile-icon-png.png'
const Navbar = () => {

  
  const { getTotalItems } = useContext(shopcontext);
  const [state, setstate] = useState("Login");

  const changestate = () => {
    if (localStorage.getItem('token')) {
      setstate('Logout');
    }
    else setstate('Login');
  }
  const logout = () => {
    localStorage.removeItem('token');
    changestate();
    window.location.replace('/');

  }

  useEffect(() => {
    changestate();
  }, [])

  return (
    <div className='navbar'>
     <Link to='/' style={{textDecoration:'none',color:'inherit'}} reloadDocument>
     <div className='navbar-logo'>
        <img src={logo} alt="logo" height={50} width={50} />
        <p>Shop  Smart</p>
      </div>
     </Link>
      <div className="searchbar">
        <div className='search-icon'>
          <img src={search_icon} alt=""  width={20} height={20} />
        </div>
        <div className="input">
          <input type="text" name="search_input" placeholder="Search for Products, Brands and More" />
        </div>
      </div>
      <div className='login-cart'>
        {(state === 'Login') ? <Link to='/login' reloadDocument>
          <button type="button">
            <img src={profile_icon} alt="" width={25} height={25} />
            {
              state
            }
          </button>
        </Link> : <button onClick={() => (
          logout()
        )}>{
            state
          }</button>
        }
        <div className="cart">
        <Link to={(localStorage.getItem('token'))?'/cart':'/login'} reloadDocument={(localStorage.getItem('token'))?false:true} >
          <img src={cart} alt="" height={25} width={50} />
        </Link>


        <div className="cart-count">{getTotalItems()}</div>
        </div>

        
      </div>


    </div>
  )
}

export default Navbar