import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Processors from './pages/Processors';
import VideoCards from './pages/VideoCards';
import MainBoards from './pages/MainBoards';
import OtherDevices from "./pages/OtherDevices";
import Print from "./pages/Print";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/processors" replace />} />
          <Route path="processors" element={<Processors />} />
          <Route path="videocards" element={<VideoCards />} />
          <Route path="mainboards" element={<MainBoards />} />
          <Route path="other-devices" element={<OtherDevices />} />
        </Route>
        <Route path="/print" element={<Print />} />
      </Routes>
    </HashRouter>
  );
}

export default App;