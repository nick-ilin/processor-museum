import React, { Component } from "react";
import Navigation from './components/navigation.js';
import Processors from './pages/processors.js';
import Videocards from './pages/videocards.js';
import Mainboards from './pages/mainboards.js';
import Memories from './pages/memories.js';
import Devices from './pages/devices.js';
import './styles/app.css';

class App extends React.Component {
    render() {
        return (
            <Navigation>
                <Processors path="processors" />
                <Videocards path="videocards" />
                <Mainboards path="mainboards" />
                <Memories path="memories" />
                <Devices path="devices" />
            </Navigation>
        )
    }
}

export default App;