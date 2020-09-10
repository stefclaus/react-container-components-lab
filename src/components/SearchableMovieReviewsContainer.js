import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const SEARCHTERM = 'Columbia'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +`query=${SEARCHTERM}&`
            + `api-key=${NYT_API_KEY}`;

//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=columbia&api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ

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
  event.preventDefault()
    this.props.fetchGIFs(this.state.searchTerm)
}

//define fetchGIFs!!!!!

  componentDidMount() {
    console.log(URL)
    fetch(URL)
      .then(response => response.json())
      .then(movieData => this.setState({ reviews: movieData.results }))
  }

  render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <div className="searchable-movie-reviews">
            <label>
              Search Move Reviews
              <input onChange={event => this.setState({searchTerm: event.target.value})}
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


export default SearchableMovieReviewsContainer;
