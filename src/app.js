import React from 'react'
import ReactDOM from 'react-dom'
import NewTodo from './components/NewTodo'
import Todo from './components/Todo'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this._deleteTodo = this._deleteTodo.bind(this);
    this._editTodo = this._editTodo.bind(this);
    this._toggleCompleted = this._toggleCompleted.bind(this);
    this._saveTodos = this._saveTodos.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('todos') == null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      this.setState({todos: savedTodos});
    }
  }

  _addTodo(task) {
    const newTodos = this.state.todos.concat({task: task, isCompleted: false});
    this._saveTodos(newTodos);
  }

  _editTodo(todoId, editedTask) {
    const newTodos = this.state.todos;
    newTodos[todoId].task = editedTask;
    this._saveTodos(newTodos);
  }

  _deleteTodo(todoId) {
    const currentTodos = this.state.todos;
    const newTodos = currentTodos.filter((todo, index) => {
      return index !== todoId;
    })
    this._saveTodos(newTodos);
  }

  _toggleCompleted(todoId) {
    const todos = this.state.todos;
    todos[todoId].isCompleted = !todos[todoId].isCompleted;
    this._saveTodos(todos);
  }

  _saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({todos: todos});
  }


  render() {
    return(
      <div className="panel">
        <div className="title"><h2>TODO APP</h2></div>
        <NewTodo _addTodo={this._addTodo.bind(this)} />
        <div className="todo-list">
          {this.state.todos.map(function(item, index) {
            return (
              <Todo key={index} id={index} task={item.task} isCompleted={item.isCompleted} _deleteTodo={this._deleteTodo.bind(this)} _editTodo={this._editTodo.bind(this)} _toggleCompleted={this._toggleCompleted.bind(this)} />
            )
          }, this)}
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
