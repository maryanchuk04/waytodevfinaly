import { SET_USER } from "./actionTypes.js";

export const setUser = (userData) => {
	return {
		type: SET_USER,
		payload: userData,
	};
};
