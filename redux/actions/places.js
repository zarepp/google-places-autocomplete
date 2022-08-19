import * as types from "./../types/places";

export const setRetrievePlaces = () => () => {
  type: types.SET_RETRIEVE
}

export const setRetrievePlacesSuccess = () => () => {
  type: types.SET_SUCCESS
}

export const setRetrievePlacesFailed = () => () => {
  type: types.SET_FAILED
}