import * as types from "./../types/places";

const initialState = {
  list: [],
  favorite: [],
  history: [],
  selected: {},
}

export default function placesReducer(state = initialState, { type, payload }) {
  switch (type) {
    // General
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
    
    // Manage Favorite
    case types.SET_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, payload],
      }
    case types.RESET_FAVORITE:
      return {
        ...state,
        favorite: [],
      }
    case types.REMOVE_FAVORITE_BY_ID:
      const newFavList = state.favorite.filter(item => {
        return item.place_id != payload.place_id;
      })
      return {
        ...state,
        favorite: newFavList,
      }

    // Manage History
    case types.SET_HISTORY:
      return {
        ...state,
        history: [...state.history, payload],
      }
    case types.RESET_HISTORY:
      return {
        ...state,
        history: [],
      }
    case types.REMOVE_HISTORY_BY_ID:
      const newHistList = state.history.filter(item => {
        return item.place_id != payload.place_id;
      })
      return {
        ...state,
        history: newHistList,
      }
    default:
      return state;
  }
}