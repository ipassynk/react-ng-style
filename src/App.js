import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
    'state-pink': {
        padding: 20,
        backgroundColor: 'pink'
    },
    'state-blue': {
        padding: 20,
        backgroundColor: 'blue'
    }
};

class App extends Component {
    constructor() {
        super();
        this.state = {color: 'pink'};
    }

    componentWillMount() {
        this.interval = setInterval(()=>
                this.setState(({color})=> ({color: `${this.state.color === 'pink' ? 'blue' : 'pink'}`})),
            2000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p style={styles[`state-${this.state.color}`]}>My text {`state-${this.state.color}`}</p>
            </div>
        );
    }
}

export default App;
