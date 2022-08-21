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