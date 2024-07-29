import React ,{useState}from 'react'
import './Category.css'
import { useShop } from '../../context/ShopContext'
import arrow from '../assets/Ecommerce_Assets/Assets/Frontend_Assets/arrow.png'
import Dropdown from '../dropdown/Dropdown'
const Category = () => {
  const {all_categories}=useShop();
  const [isvisible,setisvisible]=useState(false);
  const [category,setcategory]=useState("");
  return (
    <div className='category-container' style={(window.location.pathname==='/')?{}:{height:'100px'}}>
      <div className='innercontainer'>
      {
        all_categories.map((item)=>{
              return (
                <div className='category-items' onMouseEnter={()=>{setisvisible(true);setcategory(item.name)}} onMouseLeave={()=>setisvisible(false) }>
                       <div className='innerdiv'>
                        {window.location.pathname==="/"?<div className='image'>
                            <img src={item.image} alt="" />
                        </div>:<></>}
                        <div className="name">
                          <p>{item.name}</p>
                        </div>
                          </div>
                          {isvisible&&(item.name===category)&&<Dropdown subcategories={item.subcategories}/>}

                </div>
              )
        })
      }
         
               
       
      

      </div>
       
    </div>
    
  )
}

export default Category
