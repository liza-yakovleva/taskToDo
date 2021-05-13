import React from 'react';
import {Link} from "react-router-dom"
// import tasks from '../../db/db'
import './header.css'

const Header=({ allTasks, doneTasks })=> {
  return (
    <>
		<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" class="nav-link px-2 link-secondary">Главная</Link></li>
        <li><Link to="/contacts" class="nav-link px-2 link-dark">Контакты</Link></li>
     
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
      </header>
      {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
		<main>	
			<div className='app-header d-flex'>
			<h1>Мои задания </h1>
			<h2>Всего -- {allTasks} / Выполнено -- {doneTasks} </h2>
		</div>
      </main>
      </>
	
	)
}
export default Header
