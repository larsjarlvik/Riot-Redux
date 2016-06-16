import * as redux from 'redux';

const reducer = (state, action) => {
	state = state || { count: 0 };

	switch(action.type) {
		case 'init':
			return { count: 1 };
		case 'add':
			return { count: state.count += action.amount };
		default:
			return state;
	}

	return state;
};

export default redux.createStore(reducer);
