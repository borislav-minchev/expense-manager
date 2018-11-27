import React, { Component } from 'react';
import SideButton from './SideButton.jsx';

class SideMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: ''
		};
	}

	onSideItemClick = event => {
		this.setState({
			selectedItem: event.target.id
		});
	};

	render() {
		const menuItems = ['home', 'account', 'settings', 'help'];
		const menuElements = menuItems.map(item => {
			let classes = 'list-group-item list-group-item-action';
			if (item == this.state.selectedItem) {
				classes += ' active';
			}
			return (
				<SideButton
					key={item}
					id={item}
					classes={classes}
					onMenuItemClick={this.onSideItemClick} />
			);
		});
		return (
			<div className="list-group list-group-flush" id="list-tab" role="tablist">
				{menuElements}
			</div>
		);
	}
}

export default SideMenu;
