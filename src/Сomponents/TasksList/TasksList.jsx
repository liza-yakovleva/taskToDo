import React from 'react';
import TasksListItem from '../TasksListItem/TasksListItem';
import './tasks-list.css'

const TasksList = ({visibleTasks, handleDelete, handleToggleStatus })=> {
	if (!visibleTasks) {
		return (<div> Минуточку ... Ждем данные с сервера!</div>)
	}
	else {
console.log(visibleTasks);

		return (
			<ul className='app-list list-group'>

				{visibleTasks.map(i => {
					return(
					<li key={i.id} className='list-group-item'>
						<TasksListItem
							{...i}
							deleteTask={() => { handleDelete(i.id) }}
							toggleImportant={() => { handleToggleStatus(i.id, 'important') }}
							toggleDone={() => { handleToggleStatus(i.id, 'done') }}
						/>
					</li>
					)})}
				
			</ul>
		)
	}
}
export default TasksList
