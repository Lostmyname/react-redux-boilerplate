import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import reducer from './reducers/index';

const match = [
	{ input: '123', output: true },
	{ input: '456', output: true },
	{ input: 'number', output: false },
	{ input: 'aaa', output: false }
];

const replace = [
	{ input: 'This is a test', output: 'This is a test' },
	{ input: 'This is is a test', output: 'This is <strong>is</strong> a test' },
	{ input: 'This this test is a test', output: 'This <strong>this</strong> test is a test' },
	{ input: 'This test test is is', output: 'This test <strong>test</strong> is <strong>is</strong>' }
];

let testThis = replace;

const store = createStore(reducer, {
	cases: testThis,
	hidePassing: localStorage.getItem('hide-passing') === 'true'
});

store.subscribe(function () {
	const state = store.getState();

	localStorage.setItem('hide-passing', state.hidePassing);
});

ReactDOM.render(
	<Provider store={store}>
		<App type={typeof testThis[0].output === 'boolean' ? 'match' : 'replace'} />
	</Provider>,
	document.getElementById('react-root')
);
