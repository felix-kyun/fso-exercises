export const filterReducer = (state = "", action) => {
	switch (action.type) {
		case "SET_FILTER":
			return action.payload.filter;
	}
	return state;
};

export function setFilter(filter) {
	return {
		type: "SET_FILTER",
		payload: {
			filter,
		},
	};
}
