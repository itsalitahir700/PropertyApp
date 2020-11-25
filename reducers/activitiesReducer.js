const id = '';

const activitiesReducer = (state = id, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CREATE_ACTIVITY':
			const newid = payload.id;
			return newid;
		default:
			return state;
	}
};

export default activitiesReducer;
