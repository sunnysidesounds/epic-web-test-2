import React from 'react';
import {Link} from 'react-router-dom';

export default function Question4() {
    return (
        <div className="home-view">
            <div className="row text-center">
                <p className="App-intro">
                    Implement the following functionality and submit your response.
                </p>
            </div>
            <div className="questions container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 text-center">
                        <Link className="btn" to="/question-1">
                            Javascript iToA
                        </Link>
                    </div>
                    <div className="col-xs-12 col-sm-6 text-center">
                        <Link className="btn" to="/question-2">
                            Javascript Matrix Unwind
                        </Link>
                    </div>
                    <div className="col-xs-12 col-sm-6 text-center">
                        <Link className="btn" to="/question-3">
                            Node Service
                        </Link>
                    </div>
                    <div className="col-xs-12 col-sm-6 text-center">
                        <Link className="btn" to="/question-4">
                            Node Client
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
