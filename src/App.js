import React, {Component} from 'react';
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
                    <h1 className="App-title">Welcome to React Cypress Boilerplate</h1>
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
