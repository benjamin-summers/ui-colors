import React, { Component } from 'react';
import Label from './label';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
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
    this.componentWillUpdate	
	var cardsList = this.state.cards.map((card) =>
		<Label color={'#'+ this.state.value} />
	)
	
    return (
			<React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={this.handleChange}/>
            <h1>{this.state.value}</h1>
          </form>
        </div>
				{cardsList}
			</React.Fragment>
    )
  }
}
