import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: []
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
            <div className="to-do-list-main">
                <input
                    onChange={ (e)=>this.changeUserInput(e.target.value)}
                    value={this.state.userInput}
                    type="text"
                />
                <button onClick={() => this.addToList(this.state.userInput)}>press me</button>
                <ul>
                    {this.state.list.map( (val) => <li key={val.toLocaleString()}>{val}</li>)}
                </ul>
            </div>
        )
    }


}