/**
 * Created by hosea on 2018-02-10.
 */
import React, {Component} from "react";
import DrinkGrid from './DrinkGrid';

class MenuGrid extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(colDrink) {
		console.log(colDrink, "coldeinrk");
	}

	render() {
		return (
			<DrinkGrid/>
		);
	}
}

MenuGrid.defaultProps = {
	clickHandler: () => {console.log("clickHandler function is not defined")},
	// contentTitle: 'Default contentTitle',
	// contentBody: 'Default contentBody'
};

// MenuGrid.propTypes = {
// 	clickHandler: React.PropTypes.func
// 	// body: React.PropTypes.string.isRequired
// };

export default MenuGrid;