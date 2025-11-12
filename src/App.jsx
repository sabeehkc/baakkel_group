import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Blog />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

