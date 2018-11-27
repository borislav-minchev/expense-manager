import React, { Component } from 'react';

class SideButton extends Component {
	render() {
		return (
			<a
				className={this.props.classes}
				id={this.props.id}
				onClick={this.props.onMenuItemClick}
				data-toggle="list"
				href="#list-home"
				role="tab"
				aria-controls="home">
				{this.props.id}
			</a>
		);
	}
}

export default SideButton;