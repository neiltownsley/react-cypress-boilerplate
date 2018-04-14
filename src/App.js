import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            message: "Do not press the button!"
        }
    }

    changeMessage = () => {
        this.setState({message: "Boom!!"});
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React SBX Demo</h1>
                </header>
                <p id="appIntro" className="App-intro">
                    This is a proof of concept Application.
                </p>
                <button id="actionBtn" onClick={this.changeMessage}>Button</button>
                <p id="actionMessage">{this.state.message}</p>
            </div>
        );
    }
}

export default App;
