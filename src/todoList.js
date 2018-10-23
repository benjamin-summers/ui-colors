import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: []
        }
    }

    render() {
        return (
            <div className="to-do-list-main">
                <input type="text"/>
            </div>
        )
    }


}