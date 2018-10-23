import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            html`
                <div class="App">
                    <h1>hello there</h1>
                </div>
            `
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));