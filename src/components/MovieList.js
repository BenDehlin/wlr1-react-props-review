import React, {Component} from 'react'
import data from '../data.js'
import Movie from './Movie'
import Form from './Form'


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

  addMovie = (movie) => {
    this.setState({
      movies: [movie, ...this.state.movies]
    })
  }

  saveMovie = (index, title, director) => {
    const {movies} = this.state
    movies.splice(index, 1, {title, director})
    this.setState({movies})
  }

  render(){
    return(
      <div>
        <h1>MovieList</h1>
        <Form addMovie={this.addMovie} />
        {this.state.movies.map((element, index) => {
          return(
            <Movie 
            movie={element} 
            deleteMovie={this.deleteMovie}
            saveMovie={this.saveMovie} 
            index={index} />
          )
        })}
      </div>
    )
  }
}

export default MovieList