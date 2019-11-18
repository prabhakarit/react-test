import React from 'react';

const default_interval = 2000;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.name = props.name;
    this.interval = (props.interval===null || props.interval<=100)?default_interval:props.interval;
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.interval
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentWillUnmount() {
	  clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.name}!</h1>
        <h3>{["This example uses component ", <span color="red">lifecycle methods</span>, " for handling events and re-render as needed."]}</h3>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

/*
 ReactDOM.render(
  <Clock />,
  document.getElementById('root')
 );
 */

 export default Clock;