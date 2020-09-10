import React from 'react';

const Review = ({ display_title, byline, headline }) => (
 <div className="review">
    <h3> { headline } </h3>
    <p>{ display_title }</p>
    <p> { byline }</p>
  </div>
)
 export default Review;


 //const Book = ({ title, img_url }) => (
 //  <div className="book">
 //    <img src={ img_url } alt={title}/>
 //    <h3>{ title }</h3>
 //  </div>
