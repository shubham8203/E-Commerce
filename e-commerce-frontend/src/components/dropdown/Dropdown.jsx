import React from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
const Dropdown = (props) => {
    const {subcategories}=props;
    const setisvisible=(val)=>{

    };
    const mp=new Map();
    mp.set("mens-wear",'/mens');
    mp.set('women-wear','/womens');
    mp.set('Kids','/kids');
  return (
    <div className='dropdown' style={window.location.pathname!=='/'?{top:'80px'}:{}} onMouseEnter={()=>setisvisible(true)} onMouseLeave={()=>setisvisible(false)} >
       <ul>
        {   
            subcategories.map((ele,i)=>{
               return (
                <Link  to={mp.has(ele.name)?mp.get(ele.name):""} style={{textDecoration:'none' }}><li key={i}>
                
                {ele.name}
               
                
               </li>
               </Link>
               )
            })
        }
       </ul>
    </div>
  )
}

export default Dropdown
