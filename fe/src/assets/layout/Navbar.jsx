import React, { useContext } from 'react'

import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketProvider';

function Navbar() {
 const {basket} =  useContext(BasketContext)
  return (
   <>
   <div className={styles.navbar_container}>
    <div className={styles.florist}><img src="	https://preview.colorlib.com/theme/florist/img/logo.png" alt="" /></div>
    <div className={styles.navbar_links}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/pages"}>Pages</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contact</Link>
       
    </div>

    <div className={styles.basket_wishList}>

        <Link to={"/wishList"}><i className="fa-regular fa-heart"></i></Link>
    <Link to={"/basket"}><i className="fa-solid fa-basket-shopping"></i>({basket.length})</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar