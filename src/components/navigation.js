import React, { Component } from "react";
import { Router, Link, Match } from "@reach/router";
import '../styles/navigation.css';
import Processors from '../pages/processors.js';
import Videocards from '../pages/videocards.js';
import Mainboards from '../pages/mainboards.js';
import Memories from '../pages/memories.js';
import Devices from '../pages/devices.js';

const NavLink = props => (
    <li>
        <Link
            {...props}
            getProps={({ isCurrent }) => {
                return {
                    className: isCurrent ? 'activemenu' : ''
                }
            }}
        />
    </li>
);

const menuItems = [
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
                {menuItems.map((item, key) => <NavLink key={key} to={item.link}>{item.name}</NavLink>)}
            </ul>
        </nav>
    </div>
  );

export default Navigation;