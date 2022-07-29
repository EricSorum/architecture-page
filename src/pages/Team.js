import React from 'react'
import Navbar from '../components/Navbar'
import worker from '../components/images/worker.jpg'
import style from '../style/Team.module.css'

function Team() {
  return (
    <div className='box'>
      <Navbar />
      <div className='page'>
        <h2>Team</h2>
        <div className={style.worker}>
          <img src={worker} alt='worker'></img>
          <h3>Everyone at ABCD loves hands-on building.</h3>
          <p>Placerat convallis sociosqu fames lacinia varius. Luctus lacus vivamus fermentum penatibus; netus auctor semper. Imperdiet volutpat faucibus lacus tellus accumsan cursus habitasse porttitor fames ac adipiscing penatibus! Ut sapien et iaculis augue ultrices a nascetur fermentum ultricies placerat. Nostra proin nisi varius erat aliquam condimentum id nulla. Per massa donec dictum amet nec molestie viverra iaculis ut. Suspendisse mus curae; hac suspendisse purus id himenaeos tincidunt? Viverra ad sapien praesent tortor cubilia felis. Pretium volutpat aenean quam fermentum nulla parturient. Integer dui at aliquam class ante potenti, convallis rhoncus! In euismod sodales tortor fames morbi, conubia cubilia. Nam.
          Justo aliquam placerat risus ac sodales himenaeos consectetur, mauris ultrices fames potenti? Aliquam lorem gravida accumsan consequat cum. Magna parturient nullam neque accumsan vehicula nec lorem himenaeos. Curae; risus augue fusce nascetur aliquam? Egestas inceptos venenatis accumsan nulla senectus accumsan sit erat senectus nunc senectus eget. Maecenas dui turpis phasellus ridiculus. Penatibus orci semper quam sociis faucibus tempus est auctor gravida tempor porttitor conubia. Cum mattis sociis habitant tincidunt phasellus donec nisi quis purus. Mus nec sagittis in platea purus turpis augue. Nisl tempor nec nostra rutrum lacus scelerisque facilisis rhoncus congue semper arcu.
          Eleifend et iaculis etiam elementum aliquet tincidunt. Cras tortor habitasse facilisis fames sapien orci etiam eu cras! Felis aptent penatibus quisque vestibulum per rutrum mollis praesent lacus ligula? Natoque, fermentum varius id praesent. Ad egestas quisque luctus cubilia. Venenatis tempus nunc eget! Maecenas gravida lacus est donec proin potenti! Rutrum a hendrerit nisi tempor eu praesent dictumst phasellus amet dictumst! Varius ante massa montes eu hendrerit penatibus eros enim! Neque fringilla vestibulum augue. Vehicula vivamus felis cum congue suspendisse accumsan sem eu habitant.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team