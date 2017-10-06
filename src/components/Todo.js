import React from 'react'
import ReactDOM from 'react-dom'

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editValue: this.props.task
    }
    this._handleDeleteButtonClick = this._handleDeleteButtonClick.bind(this);
    this._handleEditButtonClick = this._handleEditButtonClick.bind(this);
    this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
    this._handleEditInputChange = this._handleEditInputChange.bind(this);
  }

  _handleDeleteButtonClick() {
    if (!this.state.isEditing)
      this.props._deleteTodo(this.props.id);
  }

  _handleEditButtonClick() {
    if (this.state.isEditing)
      this.props._editTodo(this.props.id, this.state.editValue);
    this.setState({isEditing: !this.state.isEditing});
  }

  _handleCheckboxChange() {
    this.props._toggleCompleted(this.props.id);
  }

  _handleEditInputChange(event) {
    this.setState({editValue: event.target.value});
  }


  render() {

    let task = null;
    if (this.state.isEditing)
      task = <input onChange={this._handleEditInputChange} type="text" value={this.state.editValue} />
    else
      task = <p>{this.props.task}</p>

    return(

      <div className={this.props.isCompleted ? 'flex-row todo todo-completed' : 'flex-row todo'}>
        <div className="col-1">
          <div className="checkbox">
            <input onChange={this._handleCheckboxChange} className="checkbox-input" type="checkbox" id={'check' + this.props.id} defaultChecked={this.props.isCompleted} />
            <label htmlFor={'check' + this.props.id} className="checkbox-label">
              <span><i className={this.props.isCompleted ? 'fa fa-check-square' : 'fa fa-square'} aria-hidden="true"></i></span>
            </label>
          </div>
        </div>
        <div className="col-2">
          {task}
        </div>
        <div className="col-3">
          <div onClick={this._handleEditButtonClick} className="button"><i className={this.state.isEditing ? 'fa fa-pencil blue' : 'fa fa-pencil'} aria-hidden="true"></i></div>
          <div onClick={this._handleDeleteButtonClick} className="button"><i className="fa fa-trash" aria-hidden="true"></i></div>
        </div>
      </div>

    )
  }

}

export default Todo
