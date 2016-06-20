import React, { Component } from 'react'
import { render } from 'react-dom'

import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

class App extends Component {
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
