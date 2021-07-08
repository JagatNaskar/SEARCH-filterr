import React from "react";
import{NavLink} from "react-router-dom";
const Menu = () =>{
    return(
        <>
        {/*
        <a href="/">About Us</a>
        <a href="Contact">Contact Us</a>
        */}
        <div className="Menu-sty">
        <NavLink exact activeClassName="active" to ='/'> About Me </NavLink>
        <NavLink exact activeClassName="active" to='/Service'>Service </NavLink>
        <NavLink exact activeClassName="active" to='/Contact'>Feedback </NavLink>
        </div>
        </>
    )
};

export default Menu;