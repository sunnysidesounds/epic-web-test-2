import React from 'react';
import {Integer} from './Integer.js'
import './Question1.sass';

/**
 * Implement the integer to string logic here.  This method is attached to the window because it is used by the
 * test harness to verify the results
 * @param value
 * @param numberBase
 */
window.integerToString = function integerToString(value, numberBase) {
    return Integer.toBaseNString(value, numberBase)
};

export default class Question1 extends React.Component {

    state = {
        output: ''
    };

    onClickConvertIToA = () => {
        const output = window.integerToString(this.valueInput.value, this.baseValueInput.value);
        this.setState({
            output
        });
    };

    render() {
        return (
            <div className="question1-view container">
                <div className="row text-center">
                    <div className="col-xs-12">
                        <div className="alert alert-warning">
                            <strong>Do not</strong> use built-in language features to accomplish the task.<br />
                            <strong>Do not</strong> trivialize the task by using pre-existing JS functions to solve the crux of the question, for example, Number.toString(numberBase).
                        </div>
                        <p className="App-intro">
                            Write a function that displays the string form of a value in a particular number base.
                            Feel free to change this view as much as necessary to adequately solve the problem.
                        </p>
                    </div>
                </div>
                <div className="questions container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="value">Value</label>
                                <input
                                    ref={(c) => {this.valueInput = c;}}
                                    type="text"
                                    id="value"
                                    className="form-control"
                                    placeholder="1234" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="base">Base</label>
                                <input
                                    ref={(c) => {this.baseValueInput = c;}}
                                    type="text"
                                    id="base"
                                    className="form-control"
                                    placeholder="10" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="output">Output</label>
                                <input
                                    type="text"
                                    id="output"
                                    className="form-control"
                                    placeholder="0123456789ABCDEF"
                                    value={this.state.output}
                                    readOnly
                                />
                            </div>
                            <button className="btn btn-default" onClick={this.onClickConvertIToA}>
                                Convert I to A
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
