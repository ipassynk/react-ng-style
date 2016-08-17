import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const styles = ['pink', 'blue'].reduce((acc, color) => {
    acc[`state-${color}`] = {padding: 20, backgroundColor: `${color}`};
    return acc;
}, {});


class App extends Component {
    constructor() {
        super();
        this.state = {color: 'pink'};
    }

    componentWillMount() {
        this.interval = setInterval(()=>
                this.setState(({color})=> ({color: `${color === 'pink' ? 'blue' : 'pink'}`})),
            2000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        let {color} = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p style={styles[`state-${color}`]}>My text {`state-${color}`}</p>
            </div>
        );
    }
}

export default App;
