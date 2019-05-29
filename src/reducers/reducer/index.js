import { SET_CUSTOM_NAME } from '../../actionTypes/reducer';

export default function reducer(state, action) {
	switch (action.type) {
		case SET_CUSTOM_NAME:
			return state;
		default:
			return state;
	}
}
