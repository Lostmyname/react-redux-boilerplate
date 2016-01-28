import { combineReducers } from 'redux';

import {
	UPDATE_COUNT
} from '../actions';

function helloWorldCount(count = 1, action) {
	switch (action.type) {
		case UPDATE_COUNT:
			return count + 1;

		default:
			return count;
	}
}

export default combineReducers({ helloWorldCount });