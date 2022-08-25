import React from 'react'
import logo from './images/logo.png'
import style from '../style/NavHead.module.css'
/*
The header for the site includes a logo image and company name 
in the upper left corner.
*/
function NavHead() {
  return (
    <a href="/" className={style.headDiv}>
       <img src={logo} alt="ABCD Logo" className={style.logo}></img>
       <div className={style.nameDiv}>
         <span className={style.name}>ABCD</span>
         <span className={style.sub}>Architecture</span>
      </div>
    </a>
  )
}

export default NavHead