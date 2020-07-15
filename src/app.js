import React, { Component } from "react";

import './styles/app.css';

const menuItems = [
    {name: "Процессоры"},
    {name: "Видеокарты"},
    {name: "Материнские платы"}, 
    {name: "ОЗУ"},
    {name: "Устройства"}
    ];
    
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = { selectedItem: null };
    }
    handleItemClick(selectedItem) {
        this.setState({ selectedItem });
    }
    render() {
        const { items } = this.props;
        const { selectedItem } = this.state;
        const { handleItemClick } = this;
        <ul>
            {menuItems.map((item, key) => <Link key={key} item={item} isActive={item === selectedItem} onClick={handleItemClick} />)}
        </ul>
    }
}
class Link extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { item, onClick } = this.props;
        onClick(item);
    }
    render() {
        const { item, isActive } = this.props;
        const { handleClick } = this;
        return(
             <li className={isActive ? 'activemenu' : '' } onClick={handleClick}>{item.name}</li>
        )
    }
}

export default Menu;