import React, {Component} from 'react';

class ControlledInput extends Component {
    render() {

        return (
            <div className="ctrl-input">
                <input value={this.props.input} onChange={this.props.change} />
            </div>
        )
    }
}

export default ControlledInput;