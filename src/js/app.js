import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import DevTools from './containers/DevTools';
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

const store = DevTools.instrument()(createStore)(reducer, {
	cases: replace
});

ReactDOM.render(
	<Provider store={store}>
		<div>
			<App type="replace" />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('react-root')
);
