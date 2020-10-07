import React from 'react';

export default class Question4 extends React.Component {
    render() {
        return (
            <div className='question4-view container'>
                <div className='row text-center'>
                    <div className='col-xs-12'>
                        <p className='App-intro'>
                            Write a small app that can be used to CRUD users from the service that
                            you wrote in Question 3.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12 text-center'>
                        <h1>TODO</h1>
                        <ul className='text-left'>
                            <li>
                                Startup the mock service:&nbsp; <code>yarn start-service</code>
                            </li>
                            <li>
                                Setup Model and fetch data over ajax (Flux || hooks?). The mock
                                service is avaialable for use&nbsp;
                                <a href='http:///localhost:4000/accounts'>here</a>.
                            </li>
                            <li>List Users</li>
                            <li>Create Form for adding users</li>
                            <li>Delete Users</li>
                            <li>Update Users</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
