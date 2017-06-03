import React, { Component } from 'react';
import './App.css';
import '/usr/local/lib/node_modules/bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';
import ControlledInput from './ControlledInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      input: ''
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDrecement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  resetCounter = () => {
    this.setState({
      count: 0
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="App-header">
          <h1 className="text-center"> Welcome to React</h1>
          <p className="text-center">Examples of React Code from Free Code Camp</p>
        </div>

        <div className="example">
          <h2> Increment and Drecement of state values </h2>
          <div className="example-counter">
            <Counter counter={this.state.count} increment={this.handleIncrement}
              decrement={this.handleDrecement} reset={this.resetCounter}/>
          </div>
        </div>

        <div className="example">
          <h2>Controlled Input</h2>
          <ControlledInput value={this.state.input} change={this.handleChange}/>
          {/*<input value={this.state.input} onChange={this.handleChange} />*/}
          <p> Entered Text: {this.state.input}</p>
        </div>
        
      </div>
    );
  }
}

export default App;
