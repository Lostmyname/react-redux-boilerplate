import React from 'react';

import Validator from './Validator';

var ValidatedForm = React.createClass({
	PropTypes: {
		onSubmit: React.PropTypes.func,
		onInvalidSubmit: React.PropTypes.func
	},
	handleSubmit: function (e) {
		e.preventDefault();

		var anyInvalid = this.state.children.some((child) => {
			if (child.type !== Validator) {
				return false;
			}

			let data = this.state.map.get(getNameFromChild(child));
			return !data.dirty || !data.valid;
		});

		if (!anyInvalid && this.props.onSubmit) {
			this.props.onSubmit(e);
		}

		if (anyInvalid && this.props.onInvalidSubmit) {
			this.props.onInvalidSubmit(e);
		}
	},
	cloneChildren: function (children, map = this.state.map) {
		return React.Children.map(children, (child) => {
			if (!React.isValidElement(child)) {
				return child;
			}
			if (child.type !== Validator) {
				return child;
			}

			let key = getNameFromChild(child);

			let newChild = React.cloneElement(child, {
				onChange: function () {
					if (child.props.onChange) {
						child.props.onChange.apply(this, arguments);
					}

					map.set(key, { dirty: true, valid: true });
				},
				onInvalidChange: function () {
					map.set(key, { dirty: true, valid: false });
				}
			});

			if (!map.has(key)) {
				map.set(key, { dirty: false });
			}

			return newChild;
		});
	},
	componentWillReceiveProps: function (props) {
		let children = this.cloneChildren(props.children);
		this.setState({ children });
	},
	getInitialState: function () {
		let map = new Map();
		let children = this.cloneChildren(this.props.children, map);

		return { map, children };
	},
	render: function () {
		return <form {...this.props} onSubmit={this.handleSubmit}>
			{this.state.children}
		</form>;
	}
});

function getNameFromChild(child) {
	let children = child.props.children;

	if (Array.isArray(children)) {
		return children.find((child) => child.props && child.props.name).props.name;
	}

	return children.props.name;
}

export default ValidatedForm;
