import React, { Component } from 'react'
import './Login.css';
import {NavLink} from 'react-router-dom'
import logologin from '../../../Assets/Images/Gambar1.jpeg';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
          <div logo="logo">
              <img src={logologin} alt="Gambar3" />
          </div>
          <form className="form">
          <center>
            <input type="text" placeholder="Enter your Email" /><br/>
            <input type="text" placeholder="Enter your Password" /><br/>
            <button className="Button" ><NavLink to="/Dashboard"> Login</NavLink> </button>
            </center>
            </form>
            <div className="daftar">
                <p> Anda Belum Punya akun </p>
                  <a><NavLink to="/logout" > Klik here</NavLink></a>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
      </div>
    )
  }
}
