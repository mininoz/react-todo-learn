import React, { Component } from 'react'

export default class ToDoForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.props.onFormSubmit(this.state.text)
    this.setState({text: ''})
  }

  onTextChange(event) {
    this.setState({ text: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="form-inline">
        <input
          type="text"
          value={this.state.text}
          className="form-control"
          onChange={this.onTextChange.bind(this)}
        />
        <button type="submit" hidden>Add</button>
        <hr />
      </form>
    )
  }
}
