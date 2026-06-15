import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Processors from './pages/Processors';
import VideoCards from './pages/VideoCards';
import MainBoards from './pages/MainBoards';
import Rams from "./pages/Rams";
import OtherDevices from "./pages/OtherDevices";
import Print from "./pages/Print";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Processors />} />
          <Route path="processors" element={<Processors />} />
          <Route path="videocards" element={<VideoCards />} />
          <Route path="mainboards" element={<MainBoards />} />
          <Route path="rams" element={<Rams />} />
          <Route path="other-devices" element={<OtherDevices />} />
        </Route>
        <Route path="/print" element={<Print />} />
      </Routes>
    </HashRouter>
  );
}

export default App;