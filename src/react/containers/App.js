import React from 'react';
import Validator from '../components/Validator';
import ValidatedForm from '../components/ValidatedForm';
import { connect } from 'react-redux';

import * as actions from '../actions';

var App = React.createClass({
	inputValid: (val) => val.length >= 3,
	showAdventurer: function () {
		this.setState({ showAdventurer: true });

	},
	getInitialState: function () {
		return { showAdventurer: false, hello: 'no' };
	},
	handleSubmit: function () {
		this.setState({ hello: 'world' });
		console.log('Submit!!');
	},
	handleInvalidSubmit: function () {
		console.log('Invalid submit :(');
	},
	componentDidUpdate: function () {
		console.log(this.state);
	},
	render: function () {
		console.log(this.state.showAdventurer);

		return (
				<div>
				{this.state.hello}
			<ValidatedForm onSubmit={this.handleSubmit} onInvalidSubmit={this.handleInvalidSubmit}>


				Name:
				<Validator predicate={this.inputValid}>
					<input name="name" type="text" />
				</Validator>

				{log(this.state)}

				Gender:
				<Validator predicate={this.inputValid} onChange={this.showAdventurer}>
					Girl: <input type="radio" name="gender" value="girl" />
					Boy: <input type="radio" name="gender" value="boy" />
				</Validator>

				{ !this.state.showAdventurer ? (
					<p key="anything">hello{log(this.state.showAdventurer)}</p>
				) : null}

				<button>Submit</button>

			</ValidatedForm>
					</div>
		);
	}
});

function log(a) {
	console.log(a);
	return JSON.stringify(a);
}


function mapStateToProps(state) {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleClick: function () {
			dispatch(actions.updateCount())
		}
	};
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
)(App);