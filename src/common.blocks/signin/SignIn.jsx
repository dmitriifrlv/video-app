import './signin.css';
import auth from '../../auth'
import React, { useState } from 'react';
import axios from 'axios';

const SignIn = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginChange = (event) => {
    setLogin(event.target.value)
    
}
const onPasswordChange = (event) => {
  setPassword(event.target.value)
}
const onSubmitEvent = async (e)=>{
  e.preventDefault()
  const response = await axios.post("https://salty-atoll-46513.herokuapp.com/signin", {
    login:login,
    password:password
  })
  console.log(response.data.token)
  if (response.data.status === "success") {
    auth.login(()=>{
      props.history.push('/')
    })
    localStorage.setItem("authToken", response.data.token)
  }
  }
  return (
    <div className="formContainer">
      <form onSubmit={onSubmitEvent} className="formContainer__form">
      <h1 className="formContainer__form__title">Вход</h1>
      <label htmlFor="login">Логин</label>
      <input 
      className="formContainer__form__input"
      onChange={onLoginChange}
      type="text"/>
      <label htmlFor="password">Пароль</label>
      <input 
      className="formContainer__form__input"
      onChange={onPasswordChange}
      type="password"/>
      <button className="formContainer__form__button" type="submit"> <span>Войти</span> </button>
    </form>
    </div>
    
  )
};

export default SignIn;

{/* <form onSubmit={(e)=>{
      e.preventDefault()
      console.log(login, password)
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          login:login,
          password:password
        })
      })
      auth.login(()=>{
      props.history.push('/')
    })}}> */}

   