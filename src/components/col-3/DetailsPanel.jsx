import React, { Component } from 'react';
import ExpenseDetails from './ExpenseDetails.jsx';
import myTools from '../../services/my-tools';
import '../../css/DetailsPanel.css';

class DetailsPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let classes = 'list-group list-group-flush details-panel';
		if (!this.props.isVisible) {
			classes += ' d-none';
		}

		const expensesList = myTools.getExpensesDetails();
		const expensesElements = expensesList.map(item => {
			return (
				<ExpenseDetails
					id={item.id}
					key={item.id}
					comment={item.comment}
					date={item.date}
					ammount={item.ammount}
				/>
			);
		});

		return (
			<div className={classes}>
				{expensesElements}
			</div>
		);
	}
}

export default DetailsPanel;