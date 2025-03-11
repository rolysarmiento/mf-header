import './Header.css'
import Logo from '../assets/img/logo.svg'
import Person from '../assets/img/person.png'
import { getUser } from '../helpers/getUser'

export default function Header() {
  let user = getUser()
  return (
    <>
      <div className='bodyheader'>
        <header className="containerHeader">
          <div className="logo">
            <img src={Logo} alt="Clínica San Felipe" />
          </div>
          <div className="user-info">
            <img src={Person} className="icon-person" />
            <div>
              <p><span className='user'>Hola, </span> </p>
              <p><strong> {user} </strong></p>
            </div>
            <div className="dropdown">
              <button className="dropdown-toggle">▼</button>
              <div className="dropdown-menu">
                <a href="/" className="dropdown-item">Cerrar sesión</a>
              </div>
            </div>

          </div>
        </header>
      </div>
    </>
  )
};