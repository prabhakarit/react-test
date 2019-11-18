import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import './index_assignment-todolist.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TO-DO list</h3>
        <TodoList items={this.state.items} removeTodo={this.removeTodo} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Add something ?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <Button variant="contained" color="secondary" type="submit">
            Add #{this.state.items.length + 1}
          </Button>
        </form>
      </div>
    );
  }

  removeTodo(name){
    this.setState({
        todo: this.state.todo.filter(el => el !== name)
    })
}

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  render() {
    return (
      <div className="container">
        {this.props.items.map(item => (
          <div key={item.id} className="checkbox">
            <input type="checkbox" id={item.id} value='' onChange={this.handleClick}/>
            <label htmlFor={item.id}>
              <span>{item.text}</span>
            </label>
            &nbsp;&nbsp;<label onClick={this.removeItem}><span>[X]</span></label>
          </div>
        ))}
      </div>
    );
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  removeItem(e) {
    
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();