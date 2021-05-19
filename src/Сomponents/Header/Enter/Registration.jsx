import React, {Component} from 'react'
import "./enter.css"
// import '../../../common/style/base.css'
import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import { database } from '../../../firebase'
import avatarImg from './img/avatar.png'

class Registration extends Component {
	constructor(props) {
		super(props)
		this.state = {
				user:{
			  	email: '',
					password: '',
					name: '',
					avatar: avatarImg,
			},
			// dataUsers:[{}],
			hasAccount: false
		}
	}
componentDidMount() {
    database.ref('3/users').on('value', (snapshot) => {
      this.setState({
        dataUsers: snapshot.val()
      })
    })
    }
	// componentDidMount() {
	// 	const db = firebase.database()
	// 	console.log(db)
	// }

	handleChange = ({ target: { value, id } }) => {
	

		this.setState({
			user: {
				...this.state.user,
				[id]: value
			}
		})

	}
	handleShowPass = () => {
		this.setState({
			showPass: !this.state.showPass
		})
	}
	createAccount = () => {
		firebase.auth()
			.createUserWithEmailAndPassword(this.state.user.email, this.state.user.password)
			.then(res => {
				console.log(res)
				res ? this.setState({hasAccount: true }) : this.setState({hasAccount: false })
			})
			.catch(error => {
				alert(`Не удалось зарегестрироваться. Введены недопустимые данные!  ${error}`)
				console.log(error)
			})
		
		setTimeout(() => {
			firebase.auth().signOut()
		this.props.authListener()
     database.ref(`3/users`)
                        .child(`${this.state.dataUsers.length}`)
			 .set(this.state.user)
				 }, 1000)
		
	}


	render() {
		
		return (
			<>
					{
					this.state.hasAccount ?
						(<div className="field-for-registration field-ok">
					<form onSubmit={this.props.handleRegToggleClick}>
						<h4 className='text-center'>Вы успешно зарегистрировались, войдите в свой аккаунт</h4>
						<input type="submit" value="Ok" 
									className="reg-submit"
						/>
					</form></div> ) :
						(
				<div className="field-for-registration">
					<form onSubmit={this.createAccount} className="text-center">
						<h3 className='text-center'>Регистрация</h3>
						<input type="text"
							id="name"
							className="name"
							placeholder="Ваш Имя"
							onChange={this.handleChange} />
									
						{/* <input type="file"
							id="file"
							className="file"
						 /> */}
									
									
						<input type="text"
							id="email"
							className="login"
							placeholder="Почта"
							onChange={this.handleChange} />
									
									<input type="button"
										id="button"
										className="text-center"
										value={this.state.showPass ? 'показать пароль' : 'скрыть пароль'}
										onClick={this.handleShowPass} />
									<input type={this.state.showPass ? "password" : "text"}
										id="password"
										className="password"
										placeholder="Пароль"
										onChange={this.handleChange} />
									
						<input type="submit"
						className="reg-submit"
						/>
					</form>
							</div>
								)
				}
			</>
		)
	}
}



export default Registration