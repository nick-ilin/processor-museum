import React from 'react';
import { Router } from '@reach/router';

import ProcessorsHome from './pages/processors-home';
import ProcessorInfo from './components/processor-info';
import MainboardsHome from './pages/mainboards-home';
import MainboardInfo from './components/mainboard-info';
import VideocardsHome from './pages/videocards-home';
import VideocardsInfo from './components/videocard-info';
import Processors from './pages/processors';
import Videocards from './pages/videocards';
import Mainboards from './pages/mainboards';
import Memories from './pages/memories';
import Devices from './pages/devices';
import Home from './pages/home';

import './styles/app.scss';

const App = () => (

  <Router>
    <Home path="/">
      <Processors path="processors">
        <ProcessorsHome path="/" />
        <ProcessorInfo path="/:id" />
      </Processors>
      <Videocards path="videocards">
        <VideocardsHome path="/" />
        <VideocardsInfo path="/:id" />
      </Videocards>
      <Mainboards path="mainboards">
        <MainboardsHome path="/" />
        <MainboardInfo path="/:id" />
      </Mainboards>
      <Memories path="memories" />
      <Devices path="devices" />
    </Home>
  </Router>
);

export default App;
