import React from 'react'
import './Category.css'
import { useShop } from '../../context/ShopContext'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import arrow from '../assets/Ecommerce_Assets/Assets/Frontend_Assets/arrow.png'

const Category = () => {
  const {all_categories}=useShop();
  return (
    <div className='category-container'>
      <div className='innercontainer'>
      {
          all_categories.map((item,i)=>{
               return (
                <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        
          
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
          <div className='category-items'>
                       <div className='image'>
                          <img src={item.image} alt="" />
                       </div>
                       <div className='name'>
                        <p>{item.name}</p>
                        <img src={arrow} alt="" width={10} height={10} />
                       </div>
                </div>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul>
                  {item.subcategories.map((ele)=>{
                      return (
                       <li>{ele.name}</li>
                      )
                    })
                  }
                  </ul>
                    
                  
                </NavigationMenu.Content>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
          
      </NavigationMenu.List>
      </NavigationMenu.Root>
                
                          
                            
                         
                              

                
               )
          })
        }
      </div>
       
    </div>
  )
}

export default Category
