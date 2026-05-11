import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SchoolOfSkill from './pages/SchoolOfSkill';
import Elev8Media from './pages/Elev8Media';
import Elev8Library from './pages/Elev8Library';
import LevelUp from './pages/LevelUp';
import Innov8 from './pages/Innov8';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/school-of-skill" element={<SchoolOfSkill />} />
          <Route path="/media" element={<Elev8Media />} />
          <Route path="/library" element={<Elev8Library />} />
          <Route path="/levelup" element={<LevelUp />} />
          <Route path="/innov8" element={<Innov8 />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
