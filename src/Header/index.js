import {Link} from "react-router-dom"
import React from "react";
import { SlSettings } from "react-icons/sl"
import {Component} from 'react'
import "./index.css"

class Header extends Component{
  state={selectedLanguage: "english", showSettings:"true" }
  

clickSettings=()=>{
  this.setState({showSettings:false})
}

clickHandle=(event)=>{
  this.setState({selectedLanguage:event.target.value})

}
  render(){

    const translations = {
      english: ["Home", "Movies", "TV Shows", "Sports", "Live"],
      french: ["Accueil", "Films", "Séries TV", "Sports", "En direct"],
      german: ["Startseite", "Filme", "TV-Shows", "Sport", "Live"],
      russian: ["Главная", "Фильмы", "Сериалы", "Спорт", "Прямой эфир"],
      spanish: ["Inicio", "Películas", "Programas de TV", "Deportes", "En vivo"],
      chinese: ["主页", "电影", "电视剧", "体育", "直播"],
    };

const {selectedLanguage , showSettings}= this.state
const paths = ['/', '/movies', '/tvshows', '/sports', '/live'];


const menuItems=translations[selectedLanguage]
  
    return(
      <div className="main-container">
        <nav className="nav-bar">
          <div className="logo-container">
            <img src="https://i.pinimg.com/564x/82/27/5d/82275d7cab3b86d973bd1ce1c3aabdde.jpg" alt="Logo-name" className="logo"/>
            <h2 className="logo-name">Horizon Broadcast LLP </h2>
          </div>
          <ul className="unorder-list">
          {menuItems.map((item, index) => (
              <li className="name-list" key={index}>
                <Link to={paths[index]} style={{ textDecoration: 'none' }}>
                  {item}
                </Link>
              </li>
            ))}
        
	 
</ul>
{showSettings ?

<div className="haha">
  <SlSettings className="gear" /> 
  <p className="settings" onClick={this.clickSettings}>Settings</p>
  </div>
  
  :

    <select className="language" value={selectedLanguage} onChange={this.clickHandle}>
      <option value="english" className="french">English</option>
      <option value="french" className="french" >French</option>
      <option value="german" className="french">German</option>
      <option value="russian" className="french">Russian</option>
      <option value="spanish" className="french">Spanish</option>
      <option value="chinese" className="french">Chinese</option> 
    </select>
  }

        </nav>
      </div>
    )
  }
}
export default Header