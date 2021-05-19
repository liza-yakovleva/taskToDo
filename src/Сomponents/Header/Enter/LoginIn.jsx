import React from 'react'
import "./enter.css"
// import '../../../common/style/base.css'

import { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'

class LoginIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			hasAccount: false,
			userEmail: '',
			showPass: true,
			
			
		}
	}

	componentDidMount() {
		// const db = firebase.database()
	}

	handleChange = ({ target: { value, id } }) => {
		// console.log(value, id )
		this.setState({
			[id]: value,
		})
	}
	handleShowPass = () => {
		this.setState({
			showPass: !this.state.showPass
		})
	}
	entryAccount = () => {

		const { email, password } = this.state
		firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.then(res => {
				// console.log(res)
				
			
				this.setState({
					hasAccount: true,
					userEmail:res.user.email,
				})
			})
			.catch(err => {
				console.log(err)
				 alert('Неправильный логин или пароль')
})
	}
	
	render() {
		return (
			<>
				{
					this.state.hasAccount ?
						(<div className="field-for-registration field-ok ">
					<form onSubmit={this.props.setLog}>
								<h4 className='text-center'>Вы успешно вошли в свой аккаунт {this.state.userEmail}</h4>
						<input type="submit" value="Ok" 
									className="reg-submit"
						/>
					</form></div> ) :
						(
							<div className="field-for-log-in">
								<form onSubmit={this.entryAccount} className="form-login text-center">
									<h3 className='text-center'>Вход</h3>
									<input type="text"
										id="email"
										className="login"
										placeholder="email"
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
									{/* <Checkbox
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									<span>Запомнить пароль?</span> */}
									<input type="submit" className="reg-submit"  />
								</form>
							</div>
						)
				}
				
			</>
		)
	}

}
export default LoginIn