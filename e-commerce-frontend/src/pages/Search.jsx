import React, { useContext,useEffect,useState } from 'react'
import { shopcontext } from '../context/ShopContext';
import './CSS/search.css'

const Search = () => {
    const {all_categories}=useContext(shopcontext);
    const [search,setsearch]=useState('');
  let input;
     useEffect(()=>{
        if(search!=localStorage.getItem('search')){
            
            setsearch(localStorage.getItem('search'));
        }
        
        
},[search])

    const mp=new Map();
    console.log(all_categories);
    all_categories.map((item)=>{
        
        mp.set(item.name,item.subcategories);
     
    })
  return (
    <div className='search'>
         <h1>Search-{search}</h1>
          <div className="search-criteria">
            <p>Search Criteria</p>
            <div className="searchfield">
                <div className="fields">
                    <input defaultValue={search} type="text" name="name" id=""  onSubmit={(e)=>setsearch(e.target.value)}  />
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p>Search in product descriptions</p>
                    </div>
                </div>
                <div className="fields">
                <select name="" id="" width={500}  > 
                 
                    <option value="All Category">All Category</option>
                    {all_categories.map((item,i)=>{
                        console.log(item.name);
                        return <>
                        <option value={item.name}>{item.name}</option>
                        { 
                            mp.get(item.name).map((ele)=><option>&nbsp;&nbsp;&nbsp;&nbsp;{ele.name}</option>)
                        }
                        </>
                    })
                 }
                </select>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p>Search in subcategories</p>
                    </div>
                </div>
            </div>
          </div>
       <div className="search-button">
           <button>
            Search
           </button>
       </div>
    </div>
  )
}

export default Search
