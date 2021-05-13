import React, { Component } from 'react';
import {OverlayTrigger}  from 'react-bootstrap'
import {renderTooltipInputTasks}  from '../../Common/settings'

import './search.css'




 class Search extends Component {

	handleSearch = (e) => {
		this.props.onSearchPosts(e.target.value)
	}

	render() {
		const { searchTaskLetter } = this.props
		return (

<OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipInputTasks}
  >

			<input
				className='form-control search-input'
				type="text"
				placeholder='Поиск задания...'
				onChange={this.handleSearch}
				value={searchTaskLetter} />

</OverlayTrigger>

		)
	}
}

export default Search