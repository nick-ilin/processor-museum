import React from 'react';
import { Router } from '@reach/router';

import Processors from './pages/processors';
import Videocards from './pages/videocards';
import Mainboards from './pages/mainboards';
import Memories from './pages/memories';
import Devices from './pages/devices';
import Home from './pages/home';
import ProcessorsHome from './pages/processors-home';

import './styles/app.css';

const App = () => (
  <Router>
    <Home path="/">
      <Processors path="processors">
        <ProcessorsHome path="/" />
      </Processors>
      <Videocards path="videocards" />
      <Mainboards path="mainboards" />
      <Memories path="memories" />
      <Devices path="devices" />
    </Home>
  </Router>
);

export default App;
