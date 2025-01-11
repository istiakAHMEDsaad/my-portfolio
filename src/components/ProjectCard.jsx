/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function ProjectCard({ project, classes }) {
  const { id, imgSrc, title, tags, projectLink, liveLink, desc } =
    project || {};

  
  return (
    <div
      className={
        'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors flex flex-col justify-between ' +
        classes
      }
      data-aos="fade-up"
    >
      {/* --> main div 1 */}
      <figure className='img-box rounded-lg mb-4 basis-[50%]'>
        {' '}
        {/* aspect-square */}
        <img
          src={imgSrc}
          loading='lazy'
          className='img-cover'
          //   img-cover
          alt={`${title} ${id}`}
        />
      </figure>

      {/* --> main div 2 */}
      <div className='flex items-center justify-between mb-3'>
        {/* Title & Tags */}
        <div>
          <h3 className='title-1 mb-3'>{title}</h3>

          <div className='flex flex-wrap items-center gap-2'>
            {tags?.map((item, index) => (
              <span
                className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* <a href={projectLink} target='_blank' className='absolute inset-0'></a> */}
      <div className='mb-4'>
        <p>{desc.substring(0, 100) + '....'}</p>
      </div>

      <div className='flex items-center gap-3'>
        <Link
          to={projectLink}
          target='_blank'
          className='w-8 h-8 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center bg-zinc-50/20 hover:bg-zinc-500/20 transition-all'
        >
          <span className='text-2xl lg:text-4xl text-white'>
            <FaGithub />
          </span>
        </Link>

        <Link
          to={liveLink}
          target='_blank'
          className='w-8 h-8 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center bg-sky-500 hover:bg-sky-400/80 transition-colors'
        >
          <span className='text-2xl text-white'>
            <FaArrowUpRightFromSquare />
          </span>
        </Link>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
