import React from 'react'
import Navbar from '../components/Navbar'
import style from '../style/Contact.module.css'

function Contact() {
  return (
    <div className='box'>
      <Navbar />
      <div className='page'>
      <h2>Contact</h2>
        <form>
          <div className={style.fields}>
            <div className={style.field}><label htmlFor='fname'>First Name: </label><input></input></div>
            <div className={style.field}><label htmlFor='lname'>Last Name: </label><input></input></div>
            <div className={style.field}><label htmlFor='email'>Email address: </label><input type='email'></input></div>
          </div>
            <textarea rows='20' cols='70'></textarea>
            <button type='submit'>Submit</button>
        </form>
        <div className={style.info}>
          <span>ABCD Architecture</span><br />
          <span>12345 Washington Ave S</span><br />
          <span>Washington D.C.  33333</span><br />
          <br />
          <span>Phone: (555) 555-5555</span><br />
          <span>Fax: (555) 555-5555</span><br />
          <span>Email: abcd@architecture.com</span>
        </div>
      </div>
    </div>
  )
}

export default Contact