import React from 'react'
import { Link } from "react-router-dom"
import './header.css'

const Header = () => {
  return (
    <>

      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  mb-5 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Главная</Link></li>
          <li><Link to="/contacts" className="nav-link px-2 link-dark">Контакты</Link></li>

        </ul>

        <div className="col-md-3 text-end">
          <Link to="/signIn"><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
          <Link to="/signUp"><button type="button" className="btn btn-primary">Sign-up</button></Link>
        </div>
      </header>

    </>

  )
}
export default Header