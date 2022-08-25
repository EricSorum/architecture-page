import React from 'react'
import style from '../style/MenuLinks.module.css'
/*
This component renders the list of links in the drop-down menu on the home page.
*/
function MenuLinks(props) {
  return (
      <div className={style.links}>
        <a href="/">Home</a>
        <a href="/work">Work</a>
        <a href="/studio">Studio</a>
        <a href="/team">Team</a>
        <a href="/bulletin">Bulletin</a>
        <a href="/contact">Contact</a>
      </div>
     )
}

export default MenuLinks