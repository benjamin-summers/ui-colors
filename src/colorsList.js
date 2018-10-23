import React, { Component } from 'react';
import './card.css';

export default class ColorsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: [],
            bgColor: props.bgColor
        }
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        })
    }

    addToList(input) {
        let listArray = this.state.list;

        listArray.push(input);

        this.setState({
            list: listArray
        })
    }

    render() {
        return (
            <div className="ui-colors-container">

                <input
                    onChange={ (e)=>this.changeUserInput(e.target.value)}
                    value={this.state.userInput}
                    type="text"
                />
                <button onClick={() => this.addToList(this.state.userInput)}>Add Color</button>
                <ul className="myCards">
                    {this.state.list.map( (val) => <li key={val.toLocaleString()}>
                        <React.Fragment>
                            <div className="card">
                                <div style={{backgroundColor: '#' + val}}></div>
                                <label style={{color: '#' + val}} >{"#" + val}</label>
                            </div>
                        </React.Fragment>
                    </li>)}
                </ul>
            </div>
        )
    }


}