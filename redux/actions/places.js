import * as types from "./../types/places";

export const setListPlaces = () => () => {
  type: types.SET_RETRIEVE
}

export const setSelectedPlaces = () => () => {
  type: types.SET_SUCCESS
}

export const resetPlaces = () => () => {
  type: types.SET_FAILED
}