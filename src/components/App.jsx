import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './header/Navbar.jsx';
import SideMenu from './col-1/SideMenu.jsx';
import ExpensesPanel from './col-2/ExpensesPanel.jsx';
import NewEntryPanel from './col-3/NewEntryPanel.jsx';
import DetailsPanel from './col-3/DetailsPanel.jsx';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			detailsPanelOpened: false,
			newEntryPanelOpened: false,
			activeElement: ''
		};
	}

	onExpenseClick = elementId => {

	};

	onNewEntryClick = () => {
		debugger;
	};

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container-fluid">
					<div className="row">
						<div className="col-2 p-0">
							<SideMenu />
						</div>
						<div className="col-6">
							<ExpensesPanel
								onExpenseClick={this.onExpenseClick}
								onNewEntryClick={this.onNewEntryClick}
							/>
						</div>
						<div className="col-4">
							<DetailsPanel isVisible={this.state.detailsPanelVisible} />
							<NewEntryPanel isVisible={this.state.newEntryPanelOpened} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
