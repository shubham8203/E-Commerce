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
  const [searchResult,setsearchResult]=useState([{}]);
  const [isvisible,setisvisible]=useState(false);
  const [query,setquery]=useState('');
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
      <div className="searchbar" >
       <form action=''  >
        <div className="input">
          <input type="text" onChange={(e)=>{setsearch(e.target.value)}}   name="search" placeholder="Search for Products, Brands and More" />
        </div>
        <Link to={`/search?search=${search}`}  onClick={()=>{localStorage.setItem('search',search)}} >
        <button type='submit' className='search-icon' >
       
          <img src={search_icon} alt=""  width={20} height={20} />
         
        </button>
        </Link>
        
       
        
        </form>
      </div>
      
      <div className='login-cart'>
        {(state === 'Login') ?isvisible?<Link to='/login' reloadDocument>
          <button type="button"  onMouseEnter={() => (
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
          <div className='logout'  onMouseEnter={()=>setisvisible(true)}  onMouseLeave={()=>setisvisible(false)}>
          <Link to='/login' reloadDocument onClick={()=>localStorage.setItem('state','signup')}> <ul style={{listStyle:'none'}}>
              <li>Sign up</li>
            </ul>
            </Link>
          </div>
        </Link>:<Link to='/login' reloadDocument>
          <button type="button"  onMouseEnter={() => (
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
        <button  onMouseEnter={() => (
         setisvisible(true)
        )} onMouseLeave={() => (
          setisvisible(false)
         )}>
          <img src={profile_icon} alt="" width={25} height={25} />
          
            <p style={{fontSize:'15px'}}>{localStorage.getItem('username')}</p>
          
          <img src={arrow_icon} alt="" height={15} className='arr' />
          <div className='logout'>
            <ul style={{listStyle:'none'}}>
              <li onClick={logout}>Log Out</li>
            </ul>
          </div>
          </button>
          
        </>:
               <button onMouseEnter={() => (
                setisvisible(true)
               )} onMouseLeave={() => (
                 setisvisible(false)
                )}>
                 <img src={profile_icon} alt="" width={25} height={25} />
                 
                   <p style={{fontSize:'15px'}}>{localStorage.getItem('username')}</p>
                 
                 <img src={arrow_icon} alt="" height={15} className='arr' />
                 </button>
          
        
         
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