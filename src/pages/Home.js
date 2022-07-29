import React from 'react'
import Navbar from '../components/Navbar'
import style from '../style/Home.module.css'

function Home() {
  return (
    <div className='box'>
      <Navbar />
      <div className='page'>
          <div className={style.motto}>
            <span className={style.space}>Space</span>
            <span className={style.for}>for</span>
            <span className={style.life}>Life</span>
          </div>
          <div className={style.lower}>
            <a href='/Work.js' className={style.browse}>Browse past designs</a>
            <span className={style.about}>ABCD Architecture believes people define the places we live.  <a href="/Studio.js" className={style.more}>Read More</a></span>
          </div>
      </div>
    </div>
  );
}

export default Home;
