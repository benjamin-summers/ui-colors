import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ColorsList from './colorsList';

class App extends Component {
    render() {
        return (

            <ColorsList/>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));