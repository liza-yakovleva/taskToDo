import React, { Component } from 'react'
import Header from '../Сomponents/Header/Header'
import Filter from '../Сomponents/Filter/Filter'
import Search from '../Сomponents/Search/Search'
import TasksList from '../Сomponents/TasksList/TaskstList'
import AddForm from '../Сomponents/AddForm/AddForm'
// import tasks from '../db/db'
import { database } from '../firebase'
import {Route} from "react-router-dom"


import './app.css'

class App extends Component {
	state = {
			
		 rootPartPath: '0/',
		searchTaskLetter:'',
		filter: 'all'
	}

	 componentDidMount() {
    database.ref('/0/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
		})
		 console.log(this.state);
		 
	 }
	



	 handleDelete = (id) => {
		
		this.setState(
			({ data }) => {
				const index = data.findIndex(item => item.id === id)
				const newData = [...data.slice(0, index), ...data.slice(index + 1)]
				
				
				return {
					data: newData
				}
			})
	}

	handleAdd = (text) => {
		
		const newTask = {
			label: text,
			important: false,
			id: this.state.data ? this.state.data.length+1:0
		}

		this.setState(
			({ data }) => {
				const newArrTasks = [...data, newTask]
				return {
					data: newArrTasks
				}
			}
		)
	}

handleSearchTasks = (text) => {
		this.setState(
			{searchTaskLetter: text }
		)
	}

	 searchTask = (items, searchTaskLetter) => {
		 	if (searchTaskLetter.length === 0) {
		 		return items
		 	}
		 	return items.filter(item => item.label.indexOf(searchTaskLetter) >= 0)
		 }
		

	filterTasks = (items, filter) => {
		if (filter === 'done') {
			return (items.filter(item => item.done));
		}
		return items
	}

	handleChangeFilter = (filter) => {
		this.setState(
			{ filter: filter }
		)
	}

	handleToggleStatus = (id, selector) => {
		this.setState(
			({ data }) => {
				const index = data.findIndex(item => item.id === id);
				const oldItem = data[index];
				const newItem = { ...oldItem, [selector]: !oldItem[selector] };
				const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
				return {
					data: newData
				}
			}
		)
	}

	render() {
		const { data, searchTaskLetter, filter } = this.state
		if (data) {
			return (

				<div className='app'>
					<Route path="/" render={() => <Header
						allTasks={data.length}
						doneTasks={data.filter(i => i.done).length} />} />
				
					<div className='search-panel d-flex'>
						<Route path="/" render={() => <Search
							searchTaskLetter={searchTaskLetter}
							handleSearchTasks={this.handleSearchTasks} />} />
					
						<Route path="/" render={() => <Filter
							handleChangeFilter={this.handleChangeFilter}
							filter={this.state.filter} />} />
					</div>

					<Route path="/" render={() => <TasksList
						visibleTasks={this.filterTasks(this.handleSearchTasks(data, searchTaskLetter), filter)}
						handleDelete={this.handleDelete}
						handleToggleStatus={this.handleToggleStatus} />} />
				

					<Route path="/" render={() => <AddForm
						handleAdd={this.handleAdd} />} />
				</div>
			)
		} else { return null}
	}}


export default App