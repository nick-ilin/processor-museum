import React, { Component } from "react";
import { Router, Link, Match } from "@reach/router";
import '../styles/navigation.css';

const NavLink = props => (
    <li>
        <Link {...props} getProps={({ isCurrent }) =>  {return {className: isCurrent ? 'activemenu' : ''}}} />
    </li>
);

const navMenuItems = [
    {name:"Процессоры", link:"processors"},
    {name:"Видеокарты", link:"videocards"},
    {name:"Материнские платы", link:"mainboards"}, 
    {name:"ОЗУ", link:"memories"},
    {name:"Устройства", link:"devices"}
];

const Navigation = props => (
    <div id="navmenu">
        <nav>
            <ul>
                {navMenuItems.map((item, key) => <NavLink key={key} to={item.link}>{item.name}</NavLink>)}
            </ul>
        </nav>
    </div>
  );

export default Navigation;