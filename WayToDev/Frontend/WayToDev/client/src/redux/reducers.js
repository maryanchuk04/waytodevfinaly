import { SET_USER } from "./actionTypes";

let initState = JSON.parse(localStorage.getItem("userInfo")) || {
	_Id: "",
	name: "",
	email: "",
	password: "",
	picture: null,
	favourites: null,
	access_token: "",
};

console.log(localStorage.getItem("userInfo"));

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER:
			console.log({ ...state, ...action.payload });
			localStorage.setItem(
				"userInfo",
				JSON.stringify({ ...state, ...action.payload })
			);
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
