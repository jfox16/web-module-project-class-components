import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <p style={{
          textDecoration: (this.props.todo.completed) ? 'line-through' : 'none',
        }}>
          {this.props.todo.task}
        </p>
      </div>
    );
  }
}

export default Todo;
