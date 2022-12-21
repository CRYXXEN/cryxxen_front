import React from 'react'
import cls from './Footer.module.scss'
import {BsInstagram, BsTelegram, BsWhatsapp} from "react-icons/bs"
import {ReactComponent as Logo} from '../../assets/images/CRYXXON.svg'

const Footer = () => {
  return (
    <footer>
      <div className={cls.container}>

        <div className={cls.rights}>
          <Logo/>
          <div>
            <span>@2022 CRYXXEN</span>
            <span>All rights reserved</span>
          </div>
        </div>

        <nav className={cls.navigation}>
          <ul>
            <li>Company</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Clients</li>
            <li>Insights</li>
          </ul>
        </nav>

        <div className={cls.contacts}>
          <div><span>Text us: </span><span className={cls.email}>cryxxen@gmail.com</span></div>
          <ul>
            <li><BsInstagram/></li>
            <li><BsTelegram/></li>
            <li><BsWhatsapp/></li>
          </ul>
        </div>

      </div>
    </footer>

  )
}

export default Footer
