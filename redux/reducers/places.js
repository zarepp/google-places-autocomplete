import * as types from "./../types/places";

const initialState = {
  list: [],
  selected: {},
}

export default function placesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_LIST:
      return {
        ...state,
        list: payload,
      }
    case types.SET_SELECTED:
      return {
        ...state,
        selected: payload,
      }
    case types.RESET:
      return {
        ...initialState,
      }
    default:
      return state;
  }
}