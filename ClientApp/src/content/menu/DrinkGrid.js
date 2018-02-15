/**
 * Created by hosea on 2018-02-10.
 */
import React, {Component} from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import update from 'react-addons-update'
import './DrinkGrid.css';

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedKey: -1,
			selected: {
				name: "",
				count: 0
			},
			menu: [
				{name: "americano", count: 0},
				{name: "americano2", count: 0},
				{name: "americano", count: 0},
				{name: "americano2", count: 0},
				{name: "americano", count: 0},
				{name: "americano2", count: 0},
				{name: "americano3", count: 0}
			]
		};

		this.clickHandle = this.clickHandle.bind(this);
		this._countUpClickHandler = this._countUpClickHandler.bind(this);
		this._countDownClickHandler = this._countDownClickHandler.bind(this);

		// 배열에 원소 추가 메서드
		// 현재의 list 배열에 newObj 원소를 추가한 새로운 배열을 생성 한 후, 그 값을 현재의 list 로 설정,
		// 배열의 크기가 클 땐 성능이 좀 저하
		// 배열에 원소 삭제의 경우 splice(index, 1)
		// this.setState({
		// 	list: this.state.list.concat(newObj)
		// })

	}

	clickHandle(drink) {
		this.setState({
			menu: update(
				this.state.menu,
				{
					$splice: [[drink, 1]]
				}
			)
		});

		console.log(this.state);
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			name: nextProps.menu.name,
			phone: nextProps.menu.count
		});
	}

	_countUpClickHandler(key){
		console.log(key, "key")
		if(key == this.state.selectedKey){
			console.log("key select cancelled");
			this.setState({
				selectedKey: -1,
				selected: {
					name: "",
					phone: ""
				}
			});
			return;
		}

		this.setState({
			selectedKey: key,
			selected: this.state.menu[key]
		});
		console.log(key + " is selected");
	}

	_countDownClickHandler(key){
		console.log(key, "key")
		if(key == this.state.selectedKey){
			console.log("key select cancelled");
			this.setState({
				selectedKey: -1,
				selected: {
					name: "",
					phone: ""
				}
			});
			return;
		}

		this.setState({
			selectedKey: key,
			selected: this.state.menu[key]
		});
		console.log(key + " is selected");
	}

	render() {
		return (
			<Grid>
				<Row>
					{this.state.menu.map((drink, i) => {
						return (
							<Drink name={ drink.name}
										 count={ drink.count }
										 key={i}
										 drinkKey={i}
										 countUpClickHandler={ this._countUpClickHandler }
										 countDownClickHandler={ this._countDownClickHandler }/>
						);
					})}
				</Row>
			</Grid>
		);
	}
}


export default Menu;

class Drink extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(drink) {
		this.props.countUpClickHandler(drink)
	}

	render() {
		return (
			<Col className="col-style" xs={12} sm={6} md={4} lg={2.5} xl={2}
					 onClick={ (key) => this.handleClick(this.props.drinkKey)}>
				<span>
					{this.props.name}
				</span>
			</Col>
		);
	}
}

Drink.defaultProps = {
	name: "",
	clickHandler: () => {
		console.log("clickHandler function is not defined")
	}
};