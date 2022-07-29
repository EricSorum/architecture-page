import React, { useState } from 'react'
import style from '../style/Navbar.module.css'
import NavHead from './NavHead'
import MenuLinks from './MenuLinks'

function Navbar() {
  let [showMenu, menuHandler] = useState(false)

  return (
    <div className={style.navDiv}>
      <div className={style.topDiv}>
        <NavHead />
        <button onClick={() => menuHandler(!showMenu)} className={style.menu}>Menu</button>
        {showMenu ? <MenuLinks /> : null}
      </div>
      <ul className={style.socialDiv}>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div>
  )
}

export default Navbar