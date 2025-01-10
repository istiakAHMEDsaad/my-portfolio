/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

function Review() {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch('/review.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section id='reviews' className='section overflow-hidden'>
      <div className='container'>
        <h2 className='headline-2 mb-8'>What people say</h2>

        <div className='flex items-stretch gap-3 w-fit'>
          {reviews?.map((review, idx) => (
            <ReviewCard key={idx} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
