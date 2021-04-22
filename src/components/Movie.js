import React from 'react'

function Movie(props){
  console.log(props)
  return(
    <div style={{backgroundColor: 'pink'}}>
      <h2>TITLE: {props.movie.title}</h2>
      <h3>DIRECTOR: {props.movie.director}</h3>
      <button onClick={() => props.deleteMovie(props.index)}>DELETE</button>
    </div>
  )
}

export default Movie