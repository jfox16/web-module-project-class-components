import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
    }

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        todo
      ]
    });
  }

  toggleTodoCompleted(todoToToggle) {
    const newTodos = [ ...this.state.todos ];

    newTodos.forEach(todo => {
      if (todo === todoToToggle) {
        todo.completed = !todo.completed
      }
    });

    console.log(newTodos);

    this.setState({
      todos: newTodos
    })
  }

  clearCompleted() {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <TodoList
          todos={this.state.todos}
          toggleTodoCompleted={this.toggleTodoCompleted}
        />
        <TodoForm
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
