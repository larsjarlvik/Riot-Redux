import * as redux from 'redux';

const reducer = (state, action) => {
	state = state || { sum: 0 };

	switch(action.type) {
		case 'init':
			return { sum: 0 };
		case 'add':
			return { sum: state.sum = parseInt(action.num1) + parseInt(action.num2) };
		default:
			return state;
	}

	return state;
};

export default redux.createStore(reducer);
