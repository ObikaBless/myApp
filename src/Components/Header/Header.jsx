import React from 'react';
import './Header.css';
import logo from '../../assets/Nairarefill_logo.webp';
import {BiUserPlus} from 'react-icons/bi'

const Header = () => {
  return (
    <React.Fragment>
     <nav className='NavBar'>
        <img src={logo} alt="" />
        <div className='buttons'>
        <button className='Btn1'>
            <BiUserPlus className='icon' />
            Register
            </button>
        <button className='Btn2'>Login</button>
        </div>
     </nav>
    </React.Fragment>
  )
}

export default Header
