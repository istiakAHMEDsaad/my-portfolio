/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/skill.json')
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(()=> {
    Aos.init();
  }, [])

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2 reveal-up'>Developer Tools i Use</h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
          Discover the powerful tools and technologies I use to create
          exceptional, uniqe, qualityful and high-performing web application and
          many more...
        </p>

        {/* Fetch */}
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]' data-aos="fade-up">
          {skills.map((skillResult, idx) => (
            <SkillCard skillResult={skillResult} key={idx}></SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
