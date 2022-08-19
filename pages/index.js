import { useEffect, useRef, useState } from 'react';
import s from "../styles/Home.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from 'react-redux'
import {Loader} from '@googlemaps/js-api-loader';
import usePlacesAutocomplete from "use-places-autocomplete";


import {
  setListPlaces,
  setSelectedPlaces,
  resetPlaces,
} from "../redux/actions/places";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const dispatch = useDispatch();

  const places = useSelector(state => state.places.list)

  const [data, setData] = useState([])
  const [selectedPlace, setSelectedPlace] = useState({})

  const {
    ready,
    value,
    suggestions: { status, data: responseData  },
    setValue,
  } = usePlacesAutocomplete();

  useEffect(() => {
    if (responseData.length > 0) {
      setData(responseData)
      dispatch(setListPlaces(responseData))
    }
  }, [responseData])

  
  const handleRenderInput = (params) => {
  return (
    <TextField
      {...params}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      onlabel="Movie"
      margin="dense"
    />
  )}

  return (
    <div className={s.container}>
      <div className={s.margin}>
        <span>Search Google Place:</span>
      </div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data || []}
        selectOnFocus
        sx={{ width: 600 }}
        getOptionLabel={(option) => option.description || ""}
        renderInput={handleRenderInput}
        onChange={(event, value) => {
          setSelectedPlace(value)
        }}
      />
      <div className={s.margin}>
        <span>List of Search:</span>
      </div>
      <div className={s.margin}>
        <span>Select Place:</span>
      </div>
    </div>
  );
}