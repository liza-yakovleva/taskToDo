import React, { Component } from 'react'
import {OverlayTrigger}  from 'react-bootstrap'
import {renderTooltipAdd, renderTooltipInput}  from '../../Common/settings'

import './add-form.css'





class AddForm extends Component {
	state = {
		inputTask: ''
	}

	handleTextChange = (e) => {
		this.setState({
			inputTask: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		if (this.state.inputTask !== '') {
			this.props.handleAdd(this.state.inputTask)
		}

		this.setState({
			inputTask: ''
		})
	}

	render() {
		const { inputTask } = this.state;
		return (
			<form className='botton-panel d-flex'
				onSubmit={this.onSubmit}>

<OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipInput}
  >
				<input
				id="add1"
					type="text"
					className='form-control new-post-label'
					placeholder='Введите новое задание...'
					onChange={this.handleTextChange}
					value={inputTask} />

</OverlayTrigger>

<OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipAdd}
  >


				<button
				id="add"
					type='submit'
					className='btn btn-outline-secondary'>
					Добавить
				</button>
				
				</OverlayTrigger>


			</form >
		)
	}
}
export default AddForm