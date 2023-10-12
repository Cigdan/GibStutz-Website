import layout from './layout.module.scss'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <header className={layout.header}>
      <div>
        <img src={logo} width="60px" height="60px" />
      </div>
      <nav>
        <ul className={layout.nav}>
          <li className='btn'>Home</li>
          <li className='btn'>Route #2</li>
          <li className='btn'>Route #3</li>
          <li className='btn'>Route #4</li>
        </ul>
      </nav>
    </header>
  )
}
