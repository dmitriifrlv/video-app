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
      <div className="formContainer__form__input-form">
        <label htmlFor="login" className="formContainer__form__label">Логин</label>
        <input 
        className="formContainer__form__input"
        onChange={onLoginChange}
        type="text"/>
      </div>
      <div className="formContainer__form__input-form">
      <label htmlFor="password" className="formContainer__form__label">Пароль</label>
      <input 
      className="formContainer__form__input"
      onChange={onPasswordChange}
      type="password"/>
      </div >
      
      <button className="formContainer__form__button" type="submit"> <span>Войти</span> </button>
    </form>
    </div>
    
  )
};

export default SignIn;
   