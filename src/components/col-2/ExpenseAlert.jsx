import React, { Component } from 'react';
import '../../css/ExpenseAlert.css';

class ExpenseAlert extends Component {
	constructor(props) {
		super(props);
		this.onExpenseClick = this.onExpenseClick.bind(this);
	}

	onExpenseClick(event) {
		let target;
		if (event.target.id != this.props.id) {
			target = event.target.parentNode.id;
		} else {
			target = event.target.id;
		}
		this.props.onClick(target);
	}

	render() {
		return (
			<div
				className={'alert-container p-2 ' + this.props.expanded}
				id={this.props.id}
				onClick={this.onExpenseClick}>
				<div className="row ml-4 pt-2 disable-select">{this.props.name}</div>
				<div
					className={'alert row ml-4 mr-4 ' + this.props.color}
					role="alert"
				/>
			</div>
		);
	}
}

export default ExpenseAlert;
