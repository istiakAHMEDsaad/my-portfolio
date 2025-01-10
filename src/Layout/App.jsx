/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
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
      </main>
    </>
  );
}

export default App;
