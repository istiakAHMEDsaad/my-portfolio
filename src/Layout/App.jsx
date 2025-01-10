/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Review from '../components/Review';
import Skill from '../components/Skill';
import Work from '../components/Work';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
    </>
  );
}

export default App;
