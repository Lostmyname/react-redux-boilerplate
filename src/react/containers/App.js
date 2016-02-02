import React from 'react';
import Validator from '../components/Validator';
import ValidatedForm from '../components/ValidatedForm';
import { connect } from 'react-redux';

import * as actions from '../actions';

var App = React.createClass({
	inputValid: (val) => val.length >= 3,
	inputExists: (val) => !!val,
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
	render: function () {
		return (
			<ValidatedForm onSubmit={this.handleSubmit} onInvalidSubmit={this.handleInvalidSubmit}>

				Name:
				<Validator predicate={this.inputValid}>
					<input name="name" type="text" />
				</Validator>

				Gender:
				<Validator predicate={this.inputValid} onChange={this.showAdventurer}>
					Girl: <input type="radio" name="gender" value="girl" />
					Boy: <input type="radio" name="gender" value="boy" />
				</Validator>

				{ this.state.showAdventurer ? (
						<Validator predicate={this.inputExists}>
						Adventurer:
							I: <input type="radio" name="adventurer" value="i" />
							II: <input type="radio" name="adventurer" value="ii" />
							VI: <input type="radio" name="adventurer" value="vi" />
						</Validator>
				) : null}

				<button>Submit</button>

			</ValidatedForm>
		);
	}
});


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