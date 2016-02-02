import React from 'react';

var Validator = React.createClass({
	PropTypes: {
		predicate: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func,
		onInvalidChange: React.PropTypes.func
	},
	handleInputChange: function (e) {
		let valid = this.props.predicate(e.target.value, e);

		this.setState({ valid });

		if (valid && this.props.onChange) {
			this.props.onChange(e);
		}

		if (!valid && this.props.onInvalidChange) {
			this.props.onInvalidChange(e);
		}
	},
	render: function () {

		this.children = React.Children.map(this.props.children, (child) => {
			if (!React.isValidElement(child)) {
				return child;
			}

			return React.cloneElement(child, {
				onChange: this.handleInputChange
			});
		});

		var className = '';

		if (this.state && this.state.valid !== undefined) {
			className = this.state.valid ? 'valid' : 'invalid';
		}

		return (
			<div className={className}>
				{this.children}
			</div>
		);
	}
});

export default Validator;