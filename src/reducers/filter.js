import {
	UPDATE_FILTER,
} from '../constants';

const updateFilter = (state, action) => {

	if (state === undefined) {
		return {
			filterId: null,
		};
	}

	switch (action.type) {
		case UPDATE_FILTER:
			return {
				filterId: action.payload,
			}

		default:
			return state.filter;
	}
}

export default updateFilter;