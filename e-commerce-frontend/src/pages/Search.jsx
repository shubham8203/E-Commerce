import React, { useContext,useEffect,useState } from 'react'
import { shopcontext } from '../context/ShopContext';
import './CSS/search.css'
import Item from '../components/items/Item';

const Search = () => {
    const {all_categories,all_product}=useContext(shopcontext);
    const [search,setsearch]=useState('');
    const [searchresult,setsearchResult]=useState([]);
    const formDetails={
      search:'',
      indescription:false,
      category:'',
      insubcategory:false,
    };
    
     useEffect(()=>{
        setsearchResult(all_product);
        if(search!=localStorage.getItem('search')){
            
            setsearch(localStorage.getItem('search'));
        }
        
        
},[search])
const changeHandler=()=>{
formDetails.search=document.getElementById('search').value;
formDetails.indescription=document.getElementById('indescription').checked;
formDetails.category=document.getElementById('category').value;
formDetails.insubcategory=document.getElementById('insubcategory').checked;
}
  const formHandler= async ()=>{
    changeHandler();
    console.log(formDetails);
    let formdata=new FormData();
    for(let keys in formDetails){
        formdata.append(keys,formDetails[keys]);
    }


        await fetch('http://localhost:4000/search',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                
            },
            body:formdata,
        }).then((res)=>res.json()).then((data)=>setsearchResult(data));
  }

    const mp=new Map();
    console.log(all_categories);
    all_categories.map((item)=>{
        
        mp.set(item.name,item.subcategories);
     
    })
  return (
    <div className='search'>
         <h1>Search- '{search}'</h1>
          <div className="search-criteria">
            <p>Search Criteria</p>
            <div className="searchfield">
                <div className="fields">
                    <input defaultValue={search} type="text" name="search" id="search" />
                    <div>
                        <input type="checkbox" name="indescription" id="indescription"   />
                        <p>Search in product descriptions</p>
                    </div>
                </div>
                <div className="fields">
                <select name="category" id="category" width={500}    > 
                 
                    <option value="All Category">All Category</option>
                    {all_categories.map((item,i)=>{
                        console.log(item.name);
                        let val=(item.name).toLowerCase();
                        return <>
                        <option value={val}>{item.name}</option>
                        { 
                            mp.get(item.name).map((ele)=><option value={ele.name}>&nbsp;&nbsp;&nbsp;&nbsp;{ele.name}</option>)
                        }
                        </>
                    })
                 }
                </select>
                    <div>
                        <input type="checkbox" name="insubcategory" id="insubcategory"   />
                        <p>Search in subcategories</p>
                    </div>
                </div>
            </div>
          </div>
       <div className="search-button">
           <button   onClick={formHandler} >
            Search
           </button>
       </div>
       <hr />
       <div className="searchresult">
        <h1>Products meeting the search criteria</h1>
        {searchresult.length===0?<p>There is no Product that matches the search criteria</p>:<>
          <div className="searchitems">
            {
            searchresult.map((item)=>{
                return <Item name={item.name} id={item.id} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })
           }
          </div>

        </>}

       </div>
    </div>
  )
}

export default Search
