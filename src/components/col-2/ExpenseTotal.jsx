import React, { Component } from 'react';

class ExpenseTotal extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="row align-items-center">
				<div className="col p-2">
					<h1 className="display-4 float-left">Total: 500лв</h1>
				</div>
				<div className="col">
					<div className="row p-2">
						<h1>Expenses: 300лв</h1>
					</div>
					<div className="row p-2">
						<h1>Income: 800лв</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default ExpenseTotal;
