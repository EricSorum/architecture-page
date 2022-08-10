import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bulletin" element={<Bulletin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;