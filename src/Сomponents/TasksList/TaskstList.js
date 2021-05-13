import React from 'react';
import TasksListItem from '../TasksListItem/TasksListItem';
import './tasks-list.css'

const TasksList = ({ visibleTasks, handleDelete, handleToggleStatus })=> {

	const task = visibleTasks.map(i => {
		const { id, ...items } = i
		return (
			<li key={id} className='list-group-item'>
				<TasksListItem
					{...items}
					deleteTask={() => { handleDelete(id) }}
					toggleImportant={() => { handleToggleStatus(id, 'important') }}
					toggleDone={() => { handleToggleStatus(id, 'done') }} />
			</li>
		)
	})

	return (
		<ul className='app-list list-group'>
			{task}
		</ul>
	)
}
export default TasksList
