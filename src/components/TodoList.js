import React from 'react';
import Todo from './Todo';

import './TodoList.css';

class TodoList extends React.Component {
  render() {
    return (
      <div className='TodoList'>
        {this.props.todos.map(todo => (
          <Todo
            todo={todo}
            onClick={() => this.props.toggleTodoCompleted(todo)}
            key={todo.id}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
