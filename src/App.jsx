import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Terminology from './pages/Terminology';
import Acknowledgement from './pages/Acknowledgement';
import Documentation from './pages/Documentation';
import Binote from './pages/Binote';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminology" element={<Terminology />} />
          <Route path="/acknowledgement" element={<Acknowledgement />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/binote" element={<Binote />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;