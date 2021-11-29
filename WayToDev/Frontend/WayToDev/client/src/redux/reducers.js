import { SET_USER } from "./actionTypes";

const initState = {
	email: "",
	password: "",
	access_token: "",
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER:
			return action.payload;
		default:
			return state;
	}
};
