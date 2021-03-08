import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo
            todo={todo}
            onClick={this.props.toggleTodoCompleted(todo)}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
