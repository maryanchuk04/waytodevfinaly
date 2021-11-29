import { createStore } from "redux";
import { userReducer } from "./reducers.js";

export const store = createStore(userReducer);
