import React from 'react'
import style from "../styles/Footer.module.css"
const Footer = () => {
  return (
    <div>
        <div className={style.footer}>
       <div className={style.partfooter}>
       </div>
       <div className={style.partfooter}>
           <h4>Servicios</h4>
           <a href="#">services</a>
           <a href="#">services</a>
           <a href="#">services</a>
           <a href="#">services</a>

    </div>
       <div className={style.partfooter}>
           <h4>Acerca De</h4>
           <a href="#">about</a>
           <a href="#">about</a>
           <a href="#">about</a>
           <a href="#">about</a>
    </div>
       <div className={style.partfooter}>
            <h4>Redes sociales</h4>
            <div>
            <a href="#">about</a>
           <a href="#">about</a>
           <a href="#">about</a>
           <a href="#">about</a>
            </div>
    </div>
   </div>
    </div>
  )
}

export default Footer
