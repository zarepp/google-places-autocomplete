import { combineReducers } from "redux";

// List of reducer
import placesReducer from "./places";

const reducers = {
  places: placesReducer,
}

export default combineReducers(reducers);