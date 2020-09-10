// Code MovieReviews Here
import React from 'react';
import Review from './Review';


const MovieReviews = ({ reviews }) => (
  <div className='review-list'>
       { reviews.map(review => <Review display_title={review.display_title} byline={review.byline} headline={review.headline} />) }
  </div>
)

// const BookList = ({ books }) => (
//   <div className="book-list">
//     { books.map(book => <Book title={book.title} img_url={book.img_url} />) }
//   </div>
// )

export default MovieReviews;
