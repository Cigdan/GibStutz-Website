import layout from './layout.module.scss'
import logo from '../assets/images/logo.png'
import {HiMenuAlt3} from "react-icons/hi"

export default function Header() {
  return (
    <header className={layout.header}>
      <div>
        <img src={logo} width="60px" height="60px" alt="GibStutz Logo" />
      </div>
      <nav>
        <ul className={layout.nav}>
          <li className='btn'>Home</li>
          <li className='btn'>Route #2</li>
          <li className='btn'>Route #3</li>
          <li className='btn'>Route #4</li>
        </ul>
      </nav>
        <HiMenuAlt3 className={layout.burger} />
    </header>
  )
}
