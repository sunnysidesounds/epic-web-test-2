import React from 'react';
import MatrixRotator from "./MatrixRotator";
import './Question2.sass';

/**
 * Implement the unwind logic here.  This method is attached to the window because it is used by the
 * test harness to verify the results
 * @param value
 */
window.clockwiseMatrix = function clockwiseMatrix(value) {
    return MatrixRotator.rotateClockwise(value)
};

export default class Question2 extends React.Component {

    state = {
        output: ''
    };

    onClickUnwind = () => {
        const output = window.clockwiseMatrix(this.valueInput.value);
        this.setState({
            output
        });
    };

    render() {
        const defaultInputValue = `[2, 3, 4, 8]\n[5, 7, 9, 12]\n[1, 0, 6, 10]`;
        return (
            <div className="question1-view container">
                <div className="row text-center">
                    <div className="col-xs-12">
                        <div className="alert alert-warning">
                            The function should accept a string representing the matrix as shown below:  brackets around each row of comma-separated integers, and a newline between each row.<br />
                            The function should return the solution string of comma-separated integers.
                        </div>
                        <p className="App-intro">
                            Write a function that given a matrix of integers, builds a string with the entries of that matrix appended in clockwise order.
                            Feel free to change this view as much as necessary to adequately solve the problem.
                        </p>
                    </div>
                </div>
                <div className="questions container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="value">Spiral Matrix</label>
                                <textarea
                                    ref={(c) => {this.valueInput = c;}}
                                    type="text"
                                    id="value"
                                    rows="10"
                                    defaultValue={defaultInputValue}
                                    className="form-control">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="output">Output</label>
                                <input
                                    type="text"
                                    id="output"
                                    readOnly
                                    className="form-control"
                                    placeholder=""
                                    value={this.state.output}
                                />
                            </div>
                            <button className="btn btn-default" onClick={this.onClickUnwind}>
                                Unwind Matrix
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

