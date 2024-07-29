import React from 'react'
import './BreadCrumbs.css'
import arrow_icon from '../assets/Ecommerce_Assets/Assets/Frontend_Assets/arrow.png'
import { Link } from 'react-router-dom';


const BreadCrumbs = (props) => {
    const {Product}=props;
  return (
    <div className='breadcrumbs'>
         <Link to='/' reloadDocument>SHOP </Link><img src={arrow_icon} alt="" height={15} width={20} /><Link to={`/${Product.category}s`} reloadDocument>{Product.category}</Link> <img src={arrow_icon} alt="" width={20} height={15}/><Link to={`/product/${Product.id}`}>{Product.name}</Link>

    </div>
  )
}

export default BreadCrumbs