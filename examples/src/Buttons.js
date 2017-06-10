import React, { Component } from 'react';

class ButtonGroup extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary"> + </button>
                <button type="button" className="btn btn-info"> - </button>
                <button type="button" className="btn btn-success" > Reset </button>
            </div>
        )
    }
}

export default ButtonGroup;