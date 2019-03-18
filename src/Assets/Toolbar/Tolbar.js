import React, { Component } from 'react'
import  './Tolbar.css';
import logo from '../../Assets/Images/Gambar2.jpeg';
import {NavLink} from 'react-router-dom'

export default class Tolbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: " ",
            logout: " ",
            doesshow: false
        }
    }

    handleDropdownLoginLogout(){
        const shown = this.state.doesshow
        this.setState({doesshow: !shown})
    }
  
    render() {
    return (
      <div className="Tollbar">
        <div className= " Logos">
            <img src= {logo} className="logo" />                
        </div>
            <div className ="loginlogout">
                <li> <NavLink to="/logout">Logout  </NavLink> </li>
            </div>
      </div>
    )
  }
}
