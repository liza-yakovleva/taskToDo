import React, { Component } from 'react'
import Main from '../Сomponents/Main/Main.jsx'
import Header from '../Сomponents/Header/Header.jsx'
import Footer from '../Сomponents/Footer/Footer.jsx'
import Filter from '../Сomponents/Filter/Filter.jsx'
import Search from '../Сomponents/Search/Search.jsx'
import TasksList from '../Сomponents/TasksList/TasksList.jsx'
import AddForm from '../Сomponents/AddForm/AddForm.jsx'
import SignIn from '../Сomponents/SignIn/SignIn.jsx'
import SignUp from '../Сomponents/SignUp/SignUp.jsx'
import ContactUs from '../Сomponents/ContactUs/ContactUs.jsx'

import 'firebase/firebase-database'
import 'firebase/firebase-auth'
import { database } from '../firebase'
import {Route} from "react-router-dom"


import './app.css'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data:[{ label: 'Ваше задание', important: true, done: false, id: '0' }],
			rootPartPath: '0/',
			searchTaskLetter: '',
			filter: 'all'
		}
	}
	
	componentDidMount() {
		database.ref('/0/tasks').on('value', (snapshot) => {
			this.setState({
				data: snapshot.val()
			})
		})
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

	handleAdd = (task) => {
		const newTask = {
			label: task,
			important: false,
			id: this.state.data ? this.state.data.length + 1 : 0
		}
		this.setState(
			({ data }) => {
				const newArrTasks = [...data, newTask]
				return { data: newArrTasks }
			}
		)
	}

	handleSearchTasks = (taskLetters) => {
		this.setState({ searchTaskLetter: taskLetters })
	}

	searchTask = (tasks, searchTaskLetter) => {
		if (searchTaskLetter.length === 0) {
			return tasks
		}
		return tasks.filter(item => item.label.indexOf(searchTaskLetter) >= 0)
	}
		

	filterTasks = (tasks, filter) => {
		if (filter === 'done') {
			return (tasks.filter(i => i.done))
		}
		if (filter === 'important') {
			return (tasks.filter(i => i.important))
		}
		if (filter === 'willDo') {
			return (tasks.filter(i => i.done===false))
		}

		return tasks
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
		const
			{ data, searchTaskLetter, filter } = this.state,
			  allTasks = data.length,
				doneTasks = data.filter(i => i.done).length,
			  visibleTasks =this.filterTasks(this.searchTask(data, searchTaskLetter), filter),
		    importantTasks=data.filter(i => i.important).length,
		    willDoTasks=data.filter(i => i.done===false).length
	// console.log(data)
		
		if (data) {
			return (
				
				<>
					<Route path="/" render={() => <Header
					/>} />
					<div className='app'>
						
					<Route path="/" exact render={() => <Main
						allTasks={allTasks}
						doneTasks={doneTasks}
						willDoTasks={willDoTasks}
						importantTasks={importantTasks }/>} />
						<Route path="/contacts" exact render={() => <ContactUs allTasks={allTasks}
					/>} />
					<Route path="/signIn" exact render={() => <SignIn allTasks={allTasks}
					/>} />
					<Route path="/signUp" exact render={() => <SignUp allTasks={allTasks}
					/>} />
				
					<div className='search-panel d-flex'>
						<Route path="/" exact render={() => <Search
							searchTaskLetter={searchTaskLetter}
							handleSearchTasks={this.handleSearchTasks} />} />
					
						<Route path="/" exact render={() => <Filter
							handleChangeFilter={this.handleChangeFilter}
							filter={filter} />} />
					</div>

					<Route path="/" exact render={() => <TasksList
						visibleTasks={visibleTasks}
						handleDelete={this.handleDelete}
						handleToggleStatus={this.handleToggleStatus} />} />
				

					<Route path="/" exact render={() => <AddForm
						handleAdd={this.handleAdd} />} />
				
	</div>
				<Route path="/" render={() => <Footer
					/>} />
				</>
					
			)
		} else { return (<div> Минуточку ... Ждем данные с сервера!</div>) }
	}
}

export default App