/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import ReviewCard from './ReviewCard';

// Gsap
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Review() {
  const [reviews, setReviews] = useState();
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch('/review.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!reviews?.length) return;

    const el = sliderRef.current;

    const totalWidth = el.scrollWidth - window.innerWidth;

    gsap.to(el, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: `+=${totalWidth}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, [reviews]);

  return (
    <section id='reviews' className='section overflow-hidden'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>What people say</h2>

        {/* scrub-slide */}
        <div
          ref={sliderRef}
          className='scrub-slide flex items-stretch gap-3 w-fit'
        >
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
