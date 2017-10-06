import React from 'react'
import ReactDOM from 'react-dom'

class newTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this._handleAddClick = this._handleAddClick.bind(this);
  }

  _handleOnChange(event) {
    this.setState({inputValue: event.target.value});
  }

  _handleAddClick() {
    this.props._addTodo(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render() {
    return(
        <div className="flex-row flex-center row-margin new-todo">
            <input onChange={this._handleOnChange.bind(this)} className="input" type="text" placeholder="Enter new task..." value={this.state.inputValue} />
            <button onClick={this._handleAddClick.bind(this)} className="button"><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
    )
  }

}

export default newTodo
