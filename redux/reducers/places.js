import * as types from "./../types/places";

const initialState = {
  list: [],
  loading: false,
  error: false
}

export default function placesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_RETRIEVE:
      return {
        ...state,
        list: [],
        loading: true,
      }
    case types.SET_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
      }
    case types.SET_SUCCESS:
      return {
        ...state,
        list: [],
        loading: false,
        error: true,
      }
    default:
      return state;
  }
}