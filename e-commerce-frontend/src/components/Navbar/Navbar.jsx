import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import './navbar.css'
import logo from '../assets/image.png'
import cart from '../assets/cart.webp'
import { Link } from 'react-router-dom'
import { shopcontext } from '../../context/ShopContext'
import search_icon from '../assets/Ecommerce_Assets/Assets/Frontend_Assets/search_icon.png'
import profile_icon from '../assets/profile-icon-png.png'
import arrow_icon from '../assets/Ecommerce_Assets/Assets/Frontend_Assets/arrow.png'


const Navbar = () => {

  
  const { getTotalItems } = useContext(shopcontext);
  const [state, setstate] = useState("Login");
  
  const [isvisible,setisvisible]=useState(false);
 
  const [search,setsearch]=useState('');
  const changestate = () => {
 

    if (localStorage.getItem('token')) {
      setstate('Logout');
    }
    else setstate('Login');
  }
  const logout = () => {
    localStorage.removeItem('token');
    changestate();
    

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
      <div className="searchbar" >
       <form action=''  >
        <div className="input">
          <input type="text" onChange={(e)=>{setsearch(e.target.value)}}   name="search" placeholder="Search for Products, Brands and More" />
        </div>
        <Link to={`/search?search=${search}`} onClick={()=>{localStorage.setItem('search',search)}}  >
        <button type='submit' className='search-icon' style={{cursor:'pointer'}}>
       
          <img src={search_icon} alt=""  width={20} height={20} />
         
        </button>
        </Link>
        
       
        
        </form>
      </div>
      
      <div className='login-cart'>
        {(state === 'Login') ?(isvisible)?<Link to='/login' reloadDocument>
          <button type="button" className='login'  onMouseEnter={() => (
         setisvisible(true)
        )} onMouseLeave={() => (
          setisvisible(false)
         )} >
            <img src={profile_icon} alt="" width={25} height={25} />
            {
              state
            }
            <img src={arrow_icon} height={15} className='arr' />
          </button>
          <div className='logout' style={{height:'50px'}} onMouseEnter={() => (
         setisvisible(true)
        )} onMouseLeave={() => (
          setisvisible(false)
         )}  >
          <ul style={{listStyle:'none',width:'100%',height:'100%'}}><Link to='/login' reloadDocument style={{textDecoration:'none',color:'inherit', width:'100%',height:'100%'}} onClick={()=>localStorage.setItem('state','signup')}>
            <li style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Sign up</li>
            </Link>
            </ul>
            
          </div>
        </Link>:<Link to='/login' reloadDocument>
          <button type="button" className='login'  onMouseEnter={() => (
         setisvisible(true)
        )} onMouseLeave={() => (
          setisvisible(false)
         )} >
            <img src={profile_icon} alt="" width={25} height={25} />
            {
              state
            }
            <img src={arrow_icon} height={15} className='arr' />
          </button>

        </Link> : (isvisible)?<>
        <button className='logout-options' onMouseEnter={() => (
         setisvisible(true)
        )} onMouseLeave={() => (
          setisvisible(false)
         )}>
          <img src={profile_icon} alt="" width={25} height={25} />
          
            <p style={{fontSize:'15px',padding:'0'}}>{localStorage.getItem('username')}</p>
          
          <img src={arrow_icon} alt="" height={15} className='arr' />
          <div className='logout'>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column'}}>
              <Link to='/' reloadDocument style={{textDecoration:'none'}} ><li onClick={logout}>Log Out</li></Link>
              <Link to='/cart' style={{textDecoration:'none'}}><li>My Cart</li></Link>
              
            </ul>
          </div>
          </button>
          
        </>:
               <button className='logout-options' onMouseEnter={() => (
                setisvisible(true)
               )} onMouseLeave={() => (
                 setisvisible(false)
                )}>
                 <img src={profile_icon} alt="" width={25} height={25} />
                 
                   <p style={{fontSize:'15px',padding:'0'}}>{localStorage.getItem('username')}</p>
                 
                 <img src={arrow_icon} alt="" height={15} className='arr' />
                 </button>
          
        
         
        }
        <div className="cart">
        <Link to={(localStorage.getItem('token'))?'/cart':'/login'} onClick={()=>{
          if(!localStorage.getItem('token')){
            alert("Please Login First to View the Cart");
          }
        }} reloadDocument={(localStorage.getItem('token'))?false:true} >
          <img src={cart} alt="" height={35} width={60} />
        </Link>


        <div className="cart-count">{getTotalItems()}</div>
        </div>

        
      </div>


    </div>
  )
}

export default Navbar