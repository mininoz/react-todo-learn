import React, { Component } from 'react'
import { render } from 'react-dom'

import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

const initialTodos = [
  { id: 1, text: 'Go to School', done: false},
  { id: 2, text: 'Play football', done: false},
  { id: 3, text: 'Drink Beer', done: false},
]


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: initialTodos
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(index) {
    console.log('delete', index)
    let newTodos = this.state.todos
    newTodos.splice(index,1)

    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList
          todos={this.state.todos}
          onDelete={this.handleDelete}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
