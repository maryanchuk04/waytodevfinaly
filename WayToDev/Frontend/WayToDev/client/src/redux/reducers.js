import { SET_USER } from "./actionTypes";
import axios from "axios";

const initState = {
	user_id: "",
	email: "",
	password: "",
	access_token: localStorage.getItem("access_token") || "",
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER:
			localStorage.setItem("access_token", action.payload.access_token);
			return action.payload;
		default:
			return state;
	}
};
