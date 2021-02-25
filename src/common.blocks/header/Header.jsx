import React from "react";
import "./header.css";
import { Link } from 'react-router-dom'
import auth from '../../auth';
import { withRouter } from "react-router";
import logo from '../../common.blocks/assets/pin.svg'
function Header(props) {
  return (
    <header className="header">
      <nav className="header__nav">
      <ul className="header__nav__ul">
        <li className="header__nav__ul__item"><img className="header__nav__ul__item__logo" src={logo} alt=""/></li>
        <Link to='/' className="header__nav__ul__item"><li>Поиск</li></Link>
        <Link to='/favorites' className="header__nav__ul__item"><li className="header__nav__ul__item">Избранное</li></Link>
      </ul>
      <ul className="header__nav__ul">
        <li 
        onClick={()=>auth.logout(()=>{
          props.history.push('/signin')
        })} 
        className="header__nav__ul__item">Выйти</li>
      </ul>
      </nav>
      
    </header>
  );
}

export default withRouter(Header)