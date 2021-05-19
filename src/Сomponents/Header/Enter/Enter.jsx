import React from 'react'
import "./enter.css"
// import '../../../common/style/base.css'
import LoginIn from './LoginIn'
import Registration from './Registration'
import {useState} from 'react'
// import { connect } from 'react-redux'
const Enter = ({ authListener, setLog }) => {

	const [showEntry, setBoolE] = useState(false)
	const [showReg, setBoolR] = useState(false)
	const handleToggleR = () => {
		if (showEntry) setBoolR(false) 
	}
	const handleToggleE = () => {
		if (showReg) setBoolE(false)
	}
	const handleEnterToggleClick = () => {
		setBoolE((val) => (
			val ? false	: true
		))
		setTimeout(handleToggleE, 200)
	
		authListener()
	}

			const handleRegToggleClick = () => {
		setBoolR((val) => (
     val ? false : true
		))
				setTimeout(handleToggleR ,200)
	}

	return (
		<>
			<button onClick={() => handleEnterToggleClick()} type="button" className="btn btn-outline-primary me-2 log-in enter " >{showEntry?'Закрыть':'Вход'}  </button>
			<button onClick={() => handleRegToggleClick()} type="button" className="btn btn-primary log-in reg"> {showReg?'Закрыть':'Регистрация'}</button>
		   { showEntry ? <LoginIn handleEnterToggleClick={handleEnterToggleClick} setLog={setLog}/> : null }
			{showReg ? <Registration authListener={authListener} handleRegToggleClick={handleRegToggleClick}/>: null }
				</>
  )
}
export default Enter


 