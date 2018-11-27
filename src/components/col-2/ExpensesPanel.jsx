import React, { Component } from 'react';
import ExpenseAlert from './ExpenseAlert.jsx';
import ExpenseTotal from './ExpenseTotal.jsx';
import myTools from '../../services/my-tools';

class ExpensesPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			expandedElement: ''
		};
	}

	onExpenseClick = id => {
		let expandedElement;
		if (id == this.state.expandedElement) {
			expandedElement = '';
		} else {
			expandedElement = id;
		}
		this.setState({
			expandedElement: expandedElement
		});
		debugger;
		this.props.onExpenseClick(id);
	};

	render() {
		const expensesList = myTools.getUserExpenses();
		const expensesElements = expensesList.map(item => {
			let isExpanded = '';
			if (this.state.expandedElement == item.id) {
				isExpanded = ' active';
			}
			return (
				<ExpenseAlert
					key={item.id}
					id={item.id}
					name={item.name}
					color={item.color}
					expanded={isExpanded}
					width={item.width}
					onClick={this.onExpenseClick}
				/>
			);
		});

		return (
			<div>
				<ExpenseTotal />
				{expensesElements}
			</div>
		);
	}
}

export default ExpensesPanel;
