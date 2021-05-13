import React, { Component } from 'react';
import {OverlayTrigger}  from 'react-bootstrap'
import {renderTooltipStar , renderTooltipTrash, renderTooltipDone}  from '../../Common/settings'
import './tasks-list-item.css'



class TasksListItem extends Component {
	render() {
		const { label, deleteTask, toggleImportant, toggleDone, important, done } = this.props

		let classNames = 'app-list-item d-flex justify-content-between'
		if (important) {
			classNames += ' important'
		}
		if (done) {
			classNames += ' done'
		}

		return (
			<div className={classNames} >
				<span
					onClick={toggleDone}
					className={done ? 'line app-list-item-label' : 'app-list-item-label'}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">

				<OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipStar}
  >

					<button className='btn-star btn-sm'
						onClick={toggleImportant}>
						<i className='fa fa-star'></i>
					</button>

</OverlayTrigger>

<OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipTrash}
  >

					<button className='btn-trash btn-sm'
						onClick={deleteTask}>
						<i className='fas fa-trash'></i>
					</button>

					</OverlayTrigger>

<OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipDone}
  >

					<button className='btn-done btn-sm'
						onClick={toggleDone}>
						<i className="fas fa-check-circle"></i>
					</button>
					</OverlayTrigger>

				</div>
			</div>
		)
	}
}
export default TasksListItem