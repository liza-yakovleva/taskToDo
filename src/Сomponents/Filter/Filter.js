import React, { Component } from 'react';
import {OverlayTrigger}  from 'react-bootstrap'
import {renderTooltipAllTasks, renderTooltipDoneTask}  from '../../Common/settings'

import './filter.css'




class Filter extends Component {

	buttons = [
		{ name: 'all', label: 'Все' },
		{ name: 'done', label: 'Сделано' }
	]

	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const { handleChangeFilter, filter } = this.props;
			const classz = name === filter;
			const classBtn = classz ? 'btn btn-info' : 'btn btn-outline-info'
			return (

				<OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={name==='all' ? renderTooltipAllTasks : renderTooltipDoneTask}
  >

				<button
					key={name}
					type='button'
					className={classBtn}
					onClick={() => {handleChangeFilter(name) }}>
					{ label}
				</button >

				</OverlayTrigger>

			)
		})

		return (
			<div className='btn-group' >
				{buttons}
			</div>
		)
	}
}
export default Filter
