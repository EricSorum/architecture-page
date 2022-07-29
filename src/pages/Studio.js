import React from 'react'
import Navbar from '../components/Navbar'
import studio from '../components/images/studio.jpg'
import style from '../style/Studio.module.css'

function Studio() {
  return (
    <div className='box'>
    <Navbar />
    <div className='page'>
      <h2>Studio</h2>
      <img src={studio} alt='Studio'></img>
      <span className={style.nice}>Our very nice studio</span>
    </div>
    </div>
  )
}

export default Studio