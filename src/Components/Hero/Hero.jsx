import React from 'react';
import image from '../../assets/signIn_img.png';
import './Hero.css';
// import Forgot_pass from '../Forgot_pass/Forgot_pass'
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <React.Fragment>

            <section className='hero'>
                <div className='left_content'>
                    <h1 className='wellcome_text'>We've Missed You</h1>
                    <p>
                        Kindly signin and get first <br /> access to
                        the very best, <br /> community and
                        unlock more <br /> opportunities.
                    </p>

                    <div className='inputs'>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="text" />
                        </div>
                        <button className='btn3'>Login</button>
                    </div>
               <div className="mainSpan">
               <ul className='spanText'>
                        <li className='spanText'>
                            <Link className='link' to='/Forgot_pass'>Forgot username or password?</Link>
                        </li>
                    </ul>
                    <span className='spanText'>Don't have an account? sign In</span></div>
                </div>
                <div className='right_content'>
                    <img src={image} alt="" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero
