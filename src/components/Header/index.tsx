import React, {useState} from 'react'
import cls from './Header.module.scss'
import {ReactComponent as Logo} from '../../assets/images/CRYXXON.svg'
import cn from 'classnames'

const Header = () => {
  const [isDropdown, setIsDropdown] = useState(false)

  console.log(isDropdown)

  return (
    <div className={cn(cls.root, {
      [cls.active]: isDropdown
    })}>
     <div className={cls.container}>
       <div
         className={cls.navigation}
         onMouseOver={() => setIsDropdown(true)}
         onMouseOut={() => setIsDropdown(false)}
       >
         <div className={cls.logo}>
           <Logo/>
         </div>
         <nav>
           <ul className={cls.navigationList}>
             <li>Company</li>
             <li>Services</li>
             <li>Industries</li>
             <li>Clients</li>
             <li>Insights</li>
           </ul>
         </nav>
       </div>
       <div className={cls.contact}>
         <button>Get in touch</button>
       </div>
     </div>
    </div>
  );
};

export default Header
