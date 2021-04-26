import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      director: "",
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleAddClick = () => {
    const {title, director} = this.state
    const {addMovie} = this.props

    addMovie({
      title,
      director,
    })
    this.setState({
      title: "",
      director: "",
    })
  }

  render() {
    const {title, director} = this.state
    return (
      <div>
        <input
          onChange={(e) => this.handleChange(e)}
          name="title"
          value={title}
        />
        <input
          onChange={(e) => this.handleChange(e)}
          name="director"
          value={director}
        />
        <button onClick={this.handleAddClick}>Add Movie</button>
      </div>
    )
  }
}

export default Form
