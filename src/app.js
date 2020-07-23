import React from "react";
import { Router } from "@reach/router";

import Processors from './pages/processors';
import Videocards from './pages/videocards';
import Mainboards from './pages/mainboards';
import Memories from './pages/memories';
import Devices from './pages/devices';
import Home from './pages/home'
import ProcessorsHome from './pages/processorshome'

import './styles/app.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Home path="/">
                    <Processors path="processors"> // тут дерево вендоров
                        <ProcessorsHome path="/" /> // тут контент если не выбран процессор
                    </Processors>
                    <Videocards path="videocards" />
                    <Mainboards path="mainboards" />
                    <Memories path="memories" />
                    <Devices path="devices" />
                </Home>
            </Router>
        )
    }
}

export default App;