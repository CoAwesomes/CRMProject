import React, {Component} from "react";
import "./Body.css";

class Body extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			count: 1
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	handleClick() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.<br/>
					{this.props.name}.
					<h2>It is { this.state.date.toLocaleTimeString() }. count is { this.state.count }</h2>
				</p>
				<buttonn onClick={ this.handleClick }>Test Button</buttonn>
			</div>
		);
	}

}

export default Body;
