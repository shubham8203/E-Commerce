import React, { useEffect, useState } from 'react'
import './AddProduct.css'
import upload_icon from '../../assets/upload_icon.jpg'

const AddProduct = () => {
    const [image,setimage]=useState(false);
    const [productdetails,setproductdetails]=useState({name:"",
        image:"",
        category:"Fashion",
        old_price:"",
        new_price:"",
        subcategory:"",
    });
    const [all_categories,setall_categories]=useState([]);
    const [subcategories,setsubcategories]=useState([]);
    
    
    useEffect(()=>{
         console.log(all_categories,"   ",Date.now());
         
     if(all_categories.length==0){
     fetch('http://localhost:4000/allcategories').then((res)=>res.json()).then((data)=>{setall_categories(data)});
     }
     else{
          const required=all_categories.filter((item)=>item.name===productdetails.category);
          console.log(required);
          setsubcategories(required[0].subcategories);
     }
       
         
     
       
    

},[all_categories,productdetails.category]);
    const changeHandler=(e)=>{
     
setproductdetails({...productdetails,[e.target.name]:e.target.value})
    }
    const imagehandler=(e)=>{
      setimage(e.target.files[0]);
      
}
    const addProduct=async ()=>
    {
let responseData;
let product=productdetails;
let formData=new FormData();
formData.append('product',image);
await fetch('http://localhost:4000/upload',{
    method:'POST',
    headers:{
        Accept:'application/json',
        
    },
    body:formData,

}).then((res)=>(res.json())
).then((data)=>{

responseData=data;

})

if(responseData.success){
    product.image=responseData.image_url;
    await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
    }).then((res)=>(
    res.json()
    ))
    .then((data)=>(
data.success?alert("Product Added"):alert("Failed")
    ))
}
else alert(responseData.error);
window.location.replace('/addproduct');
    }
   
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productdetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here...'/>

      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productdetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productdetails.new_price} onChange={changeHandler}type="text" name="new_price" placeholder='Type here' />
        </div>

      </div>
      <div className="addproduct-category" style={{width:'100%'}}>
       
        <div className="category" style={{width:'50%'}}>
        <p>Product Category</p>
        <select value={productdetails.category} onChange={changeHandler} name="category" id="" className='addproduct-selector' style={{width:'100%'}}>
         {
          
          all_categories.map((item)=>{

            console.log(item.name);
  return <option value={item.name}> {item.name}</option>
          })
         }
        </select>
        
        </div>
        <div className="subcategory" style={{width:'50%'}}>
          <p>Selct Subcategory</p>
          <select name="subcategory" id="subcategory" value={productdetails.subcategory} onChange={changeHandler} style={{width:'100%'}}>
             {
         subcategories.map((item)=><option value={item.name}>{item.name}</option>)
             }
          </select>
        </div>
        

      </div>
      <div className='addProduct-itemfield'>
           <label htmlFor="file-input" className='addproduct-thumbnail-img' >
            <img src={image?URL.createObjectURL(image):upload_icon} alt="" />
           </label>
           <input value={productdetails.image} onChange={imagehandler} type="file"  name="image" id="file-input" hidden />
      </div>
      <button onClick={addProduct}  className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct