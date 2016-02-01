import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import DevTools from './containers/DevTools';
import reducer from './reducers/index';

const store = DevTools.instrument()(createStore)(reducer, {
	cases: [
		{ input: '123', output: true },
		{ input: '456', output: true },
		{ input: 'number', output: false },
		{ input: 'aaa', output: false }
	]
});

ReactDOM.render(
	<Provider store={store}>
		<div>
			<App />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('react-root')
);
