import React from 'react';
// import {Link} from "react-router-dom"
import './main.css'

const Main=({ allTasks, doneTasks, importantTasks, willDoTasks })=> {
  return (
    <>
      <section>
			<div className='app-main d-flex'>
			<h1>Мои задания </h1>
          <h2>Всего - {allTasks} | Выполнено - {doneTasks} | Сделаю -  {willDoTasks} | Важные -  {importantTasks}</h2>
        </div>
      </section>
     
    </>
	
	)
}
export default Main
