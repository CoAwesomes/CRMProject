import React, {Component} from "react";
import Order from "../menu/Order"
import MenuGrid from "../menu/MenuGrid"
import "./Content.css";

class Content extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inOrdering :{
				drinks:[]
			},
			count: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(menu) {
		this.setState({
			drinks : this.state.inOrdering.drinks.push(menu)
			// inOrdering.drinks.push({})
		});
		console.log(this.state);

	}


	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	// handleClick() {
	// 	this.setState({
	// 		count: this.state.count + 1
	// 	});
	// }

	render() {
		return (
			<div>
				<Order drinks={this.state.inOrdering.drinks}/>
				<MenuGrid clickHandler={this.handleClick}/>
			</div>
		);
	}

}

export default Content;

{/*<p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.<br/>
 {this.props.name}.
 <h2>It is { this.state.date.toLocaleTimeString() }. count is { this.state.count }</h2>
 </p>
 <button onClick={ this.handleClick }>Test Button</button>*/}