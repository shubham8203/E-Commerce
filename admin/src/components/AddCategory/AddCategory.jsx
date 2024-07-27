import React, { useState } from 'react'
import './AddCategory.css'
import upload_icon from '../../assets/upload_icon.jpg'

const AddCategory = () => {
    const [image,setimage]=useState(false);
    const [category,setcategory]=useState({
        name:"",
        image:"",
        subcategories:"",
    })
 
    const changehandler=(e)=>{
     setcategory({...category,[e.target.name]:e.target.value});
    
    }
    const imagehandler=async (e)=>{
      
       setimage(e.target.files[0]);
        const formdata=new FormData();
        
        formdata.append('categoryimage',e.target.files[0])
        await fetch("http://localhost:4000/uploadcategory",{
            method:"POST",
            headers:{
                Accept:'application/json',
            },
            body:formdata,
        }).then((res)=>(res.json())).then((data)=>{
                
            setcategory({...category,image:data.image_url});
            
            
        })
       
    }
     
    const addCategory=async (e)=>{
       
        console.log(category);
        
        await fetch("http://localhost:4000/addcategory",{
            method:"POST",
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(category),
        }).then((res)=>(res.json())).then((data)=>console.log(data))
        
    }

  return (
    
      <form className='form'  >
        <div className='name'>
        <label htmlFor="category">Category Name</label>
        <input   type="text" name="name" id="category" onChange={changehandler} />
        </div>
        <div className="subcategory">
            <label htmlFor="subcategory">Enter Subcategories</label>
            <input   type="text" name="subcategories" id="subcategory" onChange={changehandler} />
        </div>
        <div className='image'>
        <label htmlFor="file-input" className='addcategory-thumbnail-img' >
            <p>Upload Image</p>
            <img src={image?URL.createObjectURL(image):upload_icon} alt="" width={200} height={200} />
           </label>
           <input  onChange={imagehandler}  type="file"  name="image" id="file-input" hidden />
        </div>
         <button type="submit" onClick={addCategory} >
            ADD
         </button>
      </form>
   
  )
}

export default AddCategory
