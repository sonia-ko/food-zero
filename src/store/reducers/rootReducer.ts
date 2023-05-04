import reservationsReducer from "./reservationsSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  reservations: reservationsReducer,
});
