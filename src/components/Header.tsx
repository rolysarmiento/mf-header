import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Logo from '../assets/img/logo.svg'
import Person from '../assets/img/person.png'
import { getUser } from '../helpers/getUser'

export default function Header() {
  let user = getUser()
  return (
    <>
      <header className="col-12">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} style={{width: '80px'}}  />
                </a>
                <div className="navbar-collapse justify-content-end" id="navbarScroll">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg> */}
                                <img src={Person} style={{width: '30px'}} />
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"aria-expanded="false">
                                Hola , <br/>
                                {user}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Cerrar Session</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
    </>
  )
};