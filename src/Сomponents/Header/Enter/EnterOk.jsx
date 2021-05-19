import React, { Component } from 'react'
// import '../../../common/style/base.css'
import "./enter.css"
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import { database } from '../../../firebase'
// import { Link } from "react-router-dom"

class EnterOk extends Component {
constructor(props) {
		super(props)
	this.state = {
		userLoginInEmail:"",
		userName: "",
		
		}
	}
	componentDidMount() {
		database.ref('3/users').on('value', (snapshot) => {this.setState({
			allUsers: snapshot.val()
		})
		})

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
		
	
		
		
	}
	
	
	handleSave = () => {
		database.ref(`1/users/`).child(`${this.state.userName}`).set(this.props.visibleTasks)
		alert('Поздравляю Ваши данные сохранены в базу данных')
	}
	
	
	handleLogout = () => {
firebase.auth().signOut()
this.props.setLog()
	}
	
	
	render()

	{
	return (
		<>
			
			{
				this.state.allUsers ?
				this.state.allUsers.filter((user) => user.email === this.props.userEmail)
					.map((user, id) => (

			<div className="user " key={id}>
			<div className="user-wrap" >
				<div className="user-email">{user.email}</div>
								<div className="user-name">{user.name}</div>
				</div>
							<div className="user-avatar">
								<img src={user.avatar} alt="" />
							</div>
			</div>
					))
					: null
			}
			<button  type="button" onClick={this.handleSave} className="save btn btn-outline-primary me-2">Сохранить задания</button>
			<button  type="button" onClick={this.handleLogout} className="logout btn btn-outline-primary">Выход</button>
		</>
  )
}
}

export default EnterOk 