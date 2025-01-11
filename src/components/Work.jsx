/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Work() {
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch('/work.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <section id='work' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>My project highlight</h2>

        {/* Card gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2' data-aos="fade-up">
          {projects?.map((project, idx) => (
            <ProjectCard key={idx} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
