import React from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
const Dropdown = (props) => {
    const {subcategories}=props;
    const mp=new Map();
    mp.set("mens-wear",'/mens');
    mp.set('women-wear','/womens');
    mp.set('Kids','/kids');
  return (
    <div className='dropdown' style={window.location.pathname!=='/'?{top:'80px'}:{}}>
       <ul>
        {
            subcategories.map((ele)=>{
               return (
               <li>
                <Link to={mp.has(ele.name)?mp.get(ele.name):""} style={{textDecoration:'none', color:'inherit'}}>
                {ele.name}
                </Link>
                
               </li>
               )
            })
        }
       </ul>
    </div>
  )
}

export default Dropdown
