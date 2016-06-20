import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit">Add</button>
        </form>

        <h1> Todos </h1>
        <ul>
          <li> list </li>
          <li> ddd </li>
          <li> bbb </li>
          <li> list </li>
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
