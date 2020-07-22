import React from "react";
import { Router } from "@reach/router";

import Navigation from './components/navigation';

import Processors from './pages/processors';
import Videocards from './pages/videocards';
import Mainboards from './pages/mainboards';
import Memories from './pages/memories';
import Devices from './pages/devices';

import './styles/app.css';

class App extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <Router>
                    <Processors path="processors" >
                    </Processors>
                    <Videocards path="videocards" />
                    <Mainboards path="mainboards" />
                    <Memories path="memories" />
                    <Devices path="devices" />
                </Router>
            </>
        )
    }
}

export default App;