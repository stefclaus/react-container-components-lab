import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Y9ijVE84A2SEKajRMtKDQYm4hnguEhvN';
const BASE_URL =   'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;;
  
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {


  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleSubmit = event => {
     event.preventDefault();

     fetch(BASE_URL.concat(this.state.searchTerm))
       .then(res => res.json())
       .then(res => this.setState({ reviews: res.results }));
   };


handleSearchInputChange = event =>
this.setState({ searchTerm: event.target.value });



  render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <div className="searchable-movie-reviews">
            <label>
              Search Move Reviews
              <input onChange={this.handleSearchInputChange}
              value={this.state.searchTerm}
              />
            </label>
        </div>
        <div>
          <button type="submit">Search </button>
          <MovieReviews reviews={this.state.reviews} />
        </div>
        </form>


      );
    }
    }

//event => this.setState({searchTerm: event.target.value})
export default SearchableMovieReviewsContainer;
