/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import Marquee from 'react-fast-marquee';

// Gsap
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Review() {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch('/review.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: '-1000',
    });
  });

  return (
    <section id='reviews' className='section overflow-hidden'>
      {/* <Marquee pauseOnHover='ture' autoFill='true'> */}
        <div className='container'>
          <h2 className='headline-2 mb-8 reveal-up'>What people say</h2>
          {/* scrub-slide */}
          <div className='scrub-slide flex items-stretch gap-3 w-fit'>
            {reviews?.map((review, idx) => (
              <ReviewCard key={idx} review={review}></ReviewCard>
            ))}
          </div>
        </div>
      {/* </Marquee> */}
    </section>
  );
}

export default Review;
