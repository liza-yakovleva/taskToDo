import React, {Component} from 'react'
import { Link } from "react-router-dom"
import './header.css'
import logo from "../../img/logo.jpg" 


import Enter from './Enter/Enter'
import EnterOk from './Enter/EnterOk'
import firebase from 'firebase/app'
import 'firebase/auth'



class Header extends Component {

  constructor(props) {
        super(props)
    this.state = {
         menuActive:false,
      user: {
        email:"",
      },
         log:false
        }
  }
    
     componentDidMount() {
        this.authListener()
     }
    
     authListener= () =>{
        firebase.auth().onAuthStateChanged((user) => {
           if (user) {
             this.setState({  user: {
        email:user.email,
      }, })
           } 
         }
      )
     }
  
    
    setLog = () => {
      this.setState(prevState => ({ log: !prevState.log }))
    }
      
   
  render() {
    return (
      <>

        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  mb-5 border-bottom">
          <Link to="/" className="d-flex align-items-center col-md-1 mb-2 mb-md-0 text-dark text-decoration-none">
            <img className="img" src={logo} />
          </Link>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-secondary">Главная</Link></li>
            <li><Link to="/contacts" className="nav-link px-2 link-secondary">Контакты</Link></li>

          </ul>

          <div className="col-md-8 d-flex justify-content-end">
            {this.state.log ?
              <EnterOk visibleTasks={this.props.visibleTasks} userEmail={this.state.user.email} authListener={this.authListener} setLog={this.setLog} />
              : <Enter user={this.state.user} authListener={this.authListener} setLog={this.setLog} />
            }
          
          </div>
        </header>

      </>

    )
  }
}
export default Header