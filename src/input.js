import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert('the state was updated');
        
        event.preventDefault();
    }
        
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <h1>{this.state.value}</h1>
                </form>
            </div>
        )
    }
}