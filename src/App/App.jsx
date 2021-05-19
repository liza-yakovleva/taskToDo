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


import firebase from 'firebase/app'
import 'firebase/firebase-auth'



import { database } from '../firebase'
import {Route} from "react-router-dom"


import './app.css'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			// tasksDefault:[{ label: 'Ваше задание', important: true, done: false, id: '0' }],
			renderTasksUser:[{ label: 'Ваше задание', important: true, done: false, id: '0' }],
			rootPartPath: '0/',
			searchTaskLetter: '',
			filter: 'all',
			userName: "",
		}
	}
	
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
		this.setState({
			userLoginInEmail: user.email,
			userName:user.email.substring(0,(user.email.indexOf("@")))
		})
			} else {
				this.setState({
				userLoginInEmail:""
			})
			}
		})


		database.ref('/0/tasks').on('value', (snapshot) => {
			this.setState({
				tasksDefault: snapshot.val()
			})
		})

		setTimeout(() => {
			console.log(this.state.userName)
			console.log(`1/users/${this.state.userName}`)
			
			this.state.userName ?
			database.ref(`1/users/${this.state.userName}`).on('value', (snapshot) => {this.setState({
				tasksUser: snapshot.val()
			})
			})
				:
				this.setState({
					tasksUser:this.state.tasksDefault
				})
				
		}, 400)
				
		

	setTimeout(() => {
			// console.log(this.state.tasksUser)
			console.log(this.state.allUsers)
			// console.log(this.state.tasksDefault)
			// console.log(this.state.tasksUser.length)
			if (this.state.tasksUser) {
				this.setState({renderTasksUser: this.state.tasksUser })
					}
			 else {
				this.setState({ 
				renderTasksUser: this.state.tasksDefault }
				)
				}
			}
		, 700)
		console.log(this.state.RenderTasksUser)


	}
	
	handleDelete = (id) => {
		this.setState(
			({ renderTasksUser }) => {
				const index = renderTasksUser.findIndex(item => item.id === id)
				const newData = [...renderTasksUser.slice(0, index), ...renderTasksUser.slice(index + 1)]
				return {
					renderTasksUser: newData
				}
			})
	}

	handleAdd = (task) => {
		const newTask = {
			label: task,
			important: false,
			id: this.state.renderTasksUser ? this.state.renderTasksUser.length + 1 : 0
		}
		this.setState(
			({ renderTasksUser }) => {
				const newArrTasks = [...renderTasksUser, newTask]
				return { renderTasksUser: newArrTasks }
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
			({ renderTasksUser }) => {
				const index = renderTasksUser.findIndex(item => item.id === id);
				const oldItem = renderTasksUser[index];
				const newItem = { ...oldItem, [selector]: !oldItem[selector] };
				const newData = [...renderTasksUser.slice(0, index), newItem, ...renderTasksUser.slice(index + 1)];
				return {
					renderTasksUser: newData
				}
			}
		)
	}

	render() {
		const
			{ renderTasksUser, searchTaskLetter, filter } = this.state,
			  allTasks = renderTasksUser.length,
				doneTasks = renderTasksUser.filter(i => i.done).length,
			  visibleTasks =this.filterTasks(this.searchTask(renderTasksUser, searchTaskLetter), filter),
		    importantTasks=renderTasksUser.filter(i => i.important).length,
		    willDoTasks=renderTasksUser.filter(i => i.done===false).length
	// console.log(renderTasksUser)
		
		if (renderTasksUser) {
			return (
				
				<>
					<Route path="/" render={() => <Header visibleTasks={visibleTasks}
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