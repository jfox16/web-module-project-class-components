import React from 'react';

class TodoForm extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      todo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleChange(e)
  {
    this.setState({
      todo: e.target.value,
    });
  }

  handleAddClick()
  {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: '',
    });
  }

  handleClearClick()
  {
    this.props.clearCompleted();
  }

  render() {
    return (
      <div>

        <input
          type='text'
          value={this.state.todo}
          onChange={this.handleChange}
        />

        <button onClick={this.handleAddClick}>
          Add Todo
        </button>

        <button onClick={this.handleClearClick}>
          Clear Completed
        </button>

      </div>
    );
  }
}

export default TodoForm;
