import React from 'react'
import Header from '../Header/Header';
import './Forgot_pass.css'

const Forgot_pass = () => {
  return (
    <React.Fragment>
      <Header />

      <section className='container'>
        <h1>Forgot Password</h1>

        <div className='input'>
            <label htmlFor="email">Email</label>
            <input type="text" />
        </div>
        <button className='btn4'>Send Reset Link</button>
      </section>
    </React.Fragment>
  )
}

export default Forgot_pass
