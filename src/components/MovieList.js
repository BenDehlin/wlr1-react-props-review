import React, {Component} from 'react'
import data from '../data.js'
import Movie from './Movie'


class MovieList extends Component{
  constructor(props){
    super(props)
    this.state = {
      movies: data
    }
  }

  deleteMovie = (index) => {
    const {movies} = this.state
    movies.splice(index, 1)
    this.setState({
      movies: movies
    })
  }

  render(){
    return(
      <div>
        <h1>MovieList</h1>
        {this.state.movies.map((element, index) => {
          return(
            <Movie 
            movie={element} 
            deleteMovie={this.deleteMovie} 
            index={index} />
          )
        })}
      </div>
    )
  }
}

export default MovieList