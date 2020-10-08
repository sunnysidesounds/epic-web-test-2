import React, { Component } from 'react';
import logo from './EGLogo.png';
import Home from './home/Home';
import Question1 from './question1/Question1';
import Question2 from './question2/Question2';
import Question3 from './question3/Question3';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.sass';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-header text-center'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Web Engineer Test</h2>
                </div>
                <div className='app-container'>
                  <BrowserRouter>
                    <Switch>
                          <Route exact path='/' component={Home} />
                          <Route exact path='/question-1' component={Question1} />
                          <Route exact path='/question-2' component={Question2} />
                          <Route exact path='/question-3' component={Question3} />
                      </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
