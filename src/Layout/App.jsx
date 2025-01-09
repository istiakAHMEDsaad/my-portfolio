/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skill from '../components/Skill';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </>
  );
}

export default App;
