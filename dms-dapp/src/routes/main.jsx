import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import './routes-css/main.css'

import { useState } from "react";

function Main({userInstance, userSession}) {
  let navigate = useNavigate();
  let [username, setUsername] = useState('');
  let [homeActive, setHomeActive] = useState('true'); // This is for the 'Home' NavLink

  useEffect(()=>{
    userInstance.get('alias').on(v => setUsername(v)); // listens to node 'alias' and pass its value to v as argument then setUsername to change state variable
    navigate('/main'); // keep in mind that current active navlinks will no longer be active when url changes
    if(!userSession.isLoggedIn){
      navigate('/');
    }
  }, []);

  function handleLogout(){
    userInstance.leave();
    userSession.isLoggedIn = false;
    document.location.reload();
  }

  return (
    <div className="App">
      <div className="sidebar">
        <div className="title-subtitle-box">
          <h1>Project MINERVA</h1>
          <p>Decentralized Document Management and File-Sharing System</p>
        </div>
        <div className="navlink-tabs">
          <NavLink onClick={()=>setHomeActive(true)} className={()=> homeActive ? "navlink-component-active" : "navlink-component" } to="/main"> Home</NavLink>
          <NavLink onClick={()=> setHomeActive(false)} className={({isActive})=> isActive ? "navlink-component-active" : "navlink-component" } to="Add-Document"> Add Document</NavLink>
          <NavLink onClick={()=> setHomeActive(false)} className={({isActive})=> isActive ? "navlink-component-active" : "navlink-component" } to="Teams"> Favorite</NavLink>
          <NavLink onClick={()=> setHomeActive(false)} className={({isActive})=> isActive ? "navlink-component-active" : "navlink-component" } to="Teams"> Protected Documents</NavLink>
          <NavLink onClick={()=> setHomeActive(false)} className={({isActive})=> isActive ? "navlink-component-active" : "navlink-component" } to="Teams"> Teams</NavLink>
          <NavLink onClick={()=> setHomeActive(false)} className={({isActive})=> isActive ? "navlink-component-active" : "navlink-component" } to="Teams"> Connect to a Pinning Service</NavLink>
          
        </div> 
      </div>
      <div className="right-component">
        <div className="top-nav-bar">
          <div>
            {/* Name of the current tab */}
          </div>
          <div className="search-box">
            <span>Search files: </span>
            <input type="text" />
            {/* Search */}
          </div>
          <div className="username-logout-box">
            <h3>Hello {username}</h3>
            <button onClick={handleLogout}>Log out</button>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;