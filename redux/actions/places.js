import * as typesPlaces from "./../types/places";

export const setListPlaces = (data) => (dispatch) => {
  dispatch({
    type: typesPlaces.SET_LIST,
    payload: data
  })
}

export const setSelectedPlaces = (data) => (dispatch) => {
  dispatch({
    type: typesPlaces.SET_SELECTED,
    payload: data
  })
}

export const resetPlaces = () => (dispatch) => {
  dispatch({
    type: typesPlaces.RESET,
    payload: data
  })
}

// Manage Favorite
export const setFavoritePlaces = (data) => (dispatch) => {
  dispatch({
    type: typesPlaces.SET_FAVORITE,
    payload: data
  })
}

export const resetFavoritePlaces = () => (dispatch) => {
  dispatch({
    type: typesPlaces.RESET_FAVORITE,
  })
}

export const removeFavoritePlacesById = (data) => (dispatch) => {
  dispatch({
    type: typesPlaces.REMOVE_FAVORITE_BY_ID,
    payload: data
  })
}

// Manage History
export const setHistoryPlaces = (data) => (dispatch) => {
  dispatch({
    type: typesPlaces.SET_HISTORY,
    payload: data
  })
}

export const resetHistoryPlaces = () => (dispatch) => {
  dispatch({
    type: typesPlaces.RESET_HISTORY,
  })
}

export const removeHistoryPlacesById = (data) => (dispatch) => {
  dispatch({
    type: typesPlaces.REMOVE_HISTORY_BY_ID,
    payload: data
  })
}