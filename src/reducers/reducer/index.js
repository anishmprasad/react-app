import { INITIAL_DATA } from '../../actionTypes/reducer';

export default function reducer(state, action) {
	switch (action.type) {
		case INITIAL_DATA:
			return state;
		default:
			return state;
	}
}
