/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';

const ratings = new Array(5);
ratings.fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' },
});

function ReviewCard({ review }) {
  const { content, name, imgSrc, company } = review || {};
  return (
    <div className='bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]'>
      <div className='flex items-center gap-1 mb-3'>
        {ratings.map(({ icon, style }, idx) => (
          <span
            key={idx}
            className='material-symbols-rounded text-yellow-300 text-[18px]'
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className='text-zinc-400 mb-8'>{content}</p>

      <div className='flex items-center gap-2 mt-auto'>
        <figure className='img-box rounded-lg'>
          <img
            src={imgSrc}
            alt={`Image ${name}`}
            className='img-cover'
            width={44}
            height={44}
            loading='lazy'
          />
        </figure>

        <div>
          <p>{name}</p>

          <p className='text-xs text-zinc-400 tracking-wider'>{company}</p>
        </div>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewCard;
