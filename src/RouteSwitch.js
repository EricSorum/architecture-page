import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from './pages/Work';
import Studio from './pages/Studio';
import Team from './pages/Team';
import Bulletin from './pages/Bulletin';
import Contact from './pages/Contact';

//NEXT try using HashRouter... may not work locally but might work on GH Pages
// Or try finding another hosting site lol

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/route-practice" element={<Home />} />
        <Route path="/route-practice/work" element={<Work />} />
        <Route path="/route-practice/studio" element={<Studio />} />
        <Route path="/route-practice/team" element={<Team />} />
        <Route path="/route-practice/bulletin" element={<Bulletin />} />
        <Route path="/route-practice/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;