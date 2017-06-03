import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <h3>{this.props.counter}</h3>
                <div className="cta">
                    <button type="button" className="btn btn-primary" onClick={this.props.increment}> + </button>
                    <button type="button" className="btn btn-info" onClick={this.props.decrement}> - </button>
                    <button type="button" className="btn btn-success" onClick={this.props.reset}> Reset </button>
                </div>
            </div>
        )
    }
}

export default Counter;