import updateFilter from './filter';
import updateNewsItem from './filter';

const reducer = (state, action) => {
	return {
		filter: updateFilter(state, action),
		newsItem: updateNewsItem(state, action),
	};
};

export default reducer;