import React from 'react';

class TodoForm extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      task: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleChange(e)
  {
    this.setState({
      task: e.target.value,
    });
  }

  handleSubmit(e)
  {
    e.preventDefault();

    const newTodo = {
      task: this.state.task,
      completed: false,
      id: Date.now(),
    };

    this.props.addTodo(newTodo);

    this.setState({
      task: '',
    });
  }

  handleClearClick()
  {
    this.props.clearCompleted();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input
          type='text'
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button>
          Add Todo
        </button>

        <button onClick={this.handleClearClick}>
          Clear Completed
        </button>

      </form>
    );
  }
}

export default TodoForm;
