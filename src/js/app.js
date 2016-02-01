import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import reducer from './reducers/index';

const caseDataElement = document.querySelector('[type="text/x-case-data"]');
const cases = JSON.parse(caseDataElement.textContent);

const store = createStore(reducer, {
	cases,
	hidePassing: localStorage.getItem('hide-passing') === 'true'
});

store.subscribe(function () {
	const state = store.getState();

	localStorage.setItem('hide-passing', state.hidePassing);
});

ReactDOM.render(
	<Provider store={store}>
		<App type={typeof cases[0].output === 'boolean' ? 'match' : 'replace'} />
	</Provider>,
	document.getElementById('react-root')
);
