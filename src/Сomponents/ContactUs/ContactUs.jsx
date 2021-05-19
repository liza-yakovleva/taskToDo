
import React,{Component} from "react";


import './contactus.css'
// import { Link } from "react-router-dom"
import { database } from '../../firebase'




  class ContactUs extends Component {
    constructor(props) {
      super(props);
        
      this.state = {
        index: 0,
        messages: [],
        newMessage: {
          author: "",
          text: "",
          email: "",
          date: "",
          id: "",
          avatar: "../img/unknown-avatar.png",
         
        }
      }
    }


 

    handleAuthorChange = (e) => {
      this.setState({
        newMessage:
        {
          ...this.state.newMessage,
          author: e.target.value
        }
      })
    }
    handleTextChange = (e) => {
      this.setState({
        newMessage:
        {
          ...this.state.newMessage,
          text: e.target.value
        }
      })
    }
    handleEmailChange = (e) => {
      this.setState({
        newMessage: {
          ...this.state.newMessage,
          email: e.target.value
        }
      })
    }
    onSend = (e) => {
      e.preventDefault()
      this.setState({
        newMessage:
        {
          ...this.state.newMessage,
          date: new Date().toLocaleString(),
          id: this.state.messages.length,
        }
      })
        
      this.setState({
        messages: [...this.state.messages,
        this.state.newMessage]
      })
        
        // Запись в базу COMMENT
        //поиск последней записи
        const lastCommentRef = database
          .ref(`/contactUsMessage/`)
          .limitToLast(1)
        
        // делаем снимок базы послед message. его индекс и запись в state
        lastCommentRef.on("value", (d) => {
          const ind = +(Object.keys(d.val())[0]) + 1
          this.setState({ index: ind })
        }, (err) => { console.log("Error: " + err.code) })
      
        // запись в базу нового message с ожиданиеv обновления state
        setTimeout(() => {
          database.ref(`/contactUsMessage`)
            .child(`${this.state.index}`)
            .set(this.state.newMessage)
        }, 300)
     
  // обнуление полей формы с ожиданием
      setTimeout(() => {
        this.setState({
          newMessage: {
            author: "",
            text: "",
            email: "",
          }
        })
        
      }, 400)

alert('Ваше сообщение успешно отпрвлено')

    }
    
    render() {
      return (
        <>
          
          <form method="post" className="contact-us-form"
          onSubmit={this.onSend}
          >
            <label htmlFor='author'>
              <br />
                                Ваше имя <small>(обязательное поле)</small>
              <br />
              <input
                onChange={this.handleAuthorChange}
                type='text'
                value={this.state.newMessage.author}
                id='author'
               class = 'author'
                name='author'
                placeholder="Введите ваше имя..."
                required
             />
              <br />
            </label>
          
            <label htmlFor='comment'>
              Текст Вашего обращения к нам: <small>(обязательное поле)</small>
              <br />
              <textarea
                onChange={this.handleTextChange}
                value={this.state.newMessage.text}
                name="comment"
                id="text-area"
                className = 'text-area'
                placeholder="Введите ваш текст..."
                required></textarea>
            </label>
                       
            <br />
            <label htmlFor='email'>
              Email <small>(обязательное поле)</small>
              <br />
              <input
                onChange={this.handleEmailChange}
                type='email'
                value={this.state.newMessage.email}
                id='email'
                className = 'email'
                name='author_email'
                placeholder="Введите ваш email..."
                required />
            </label>
            <br />
                      
            <div className='comment-btn'>
              
                <button
                
                type="submit"
                value="send message" >
                  Отправить сообщение
                                </button>
             
            </div>
          </form>
                
        </>
		
      )
    }
  }

export default ContactUs