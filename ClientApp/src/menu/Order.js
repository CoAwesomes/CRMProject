/**
 * Created by hosea on 2018-02-10.
 */
import React, {Component} from "react";
import "../content/Content.css";

class InOrdering extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="in-ordering">
				{this.props.drinks}
			</div>
		)
		;
	}
}

export default InOrdering;