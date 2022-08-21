import { useEffect, useRef, useState } from 'react';
import s from "../styles/Home.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from 'react-redux'
import usePlacesAutocomplete from "use-places-autocomplete";
import IconList from '../components/IconList';
import Grid from '@mui/material/Grid';


import {
  setListPlaces,
  setSelectedPlaces,
  resetPlaces,
} from "../redux/actions/places";
import { flexbox } from '@mui/system';

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const dispatch = useDispatch();

  const listRedux = useSelector(state => state.places.list)
  const selectedRedux = useSelector(state => state.places.selected)
  console.log("listRedux", listRedux)

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
    }
  }, [responseData])

  
  const handleRenderInput = (params) => {
  return (
    <TextField
      {...params}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      label="Google Places"
      placeholder="Please type in ..."
      margin="dense"
    />
  )}

  return (
    <div className={s.container}>
      <Grid container>
        <Grid item md={2} xs={1}/>
        <Grid item md={8} xs={10}>
          <div className={s.marginTitle}>
            <span className={s.fontTitle}>Store Your Google Place Search Result!!</span>
          </div>
          <div className={s.marginSubtitle}>
            <span className={s.fontSubtitle}>Don't think much just google it here =)</span>
          </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data || []}
          selectOnFocus
          sx={{ marginY: 2 }}
          getOptionLabel={(option) => option.description || ""}
          renderInput={handleRenderInput}
          onChange={(event, value) => {
            setSelectedPlace(value)
            dispatch(setSelectedPlaces(value))
            dispatch(setListPlaces(data))
          }}
        />
        <Grid item md={2} xs={1}/>
        </Grid>
      </Grid>
      <Grid container className={s.search}>
        <Grid item md={2} xs={0}/>
        <Grid item md={4} xs={12}>
          <div className={s.marginFont}>
            <span>Favourite:</span>
          </div>
          { listRedux.length > 0 && (
            <div>
              { listRedux.map((place) => {
                return (
                  <IconList
                    key={place.place_id}
                    title={place.description}
                    description={`Place ID: ${place.place_id}`}
                  />
                )
              })}
            </div>
          )}
          { listRedux.length < 1 && (
            <div>
              No record yet
            </div>
          )}

        </Grid>
        <Grid item md={4} xs={12}>
          <div className={s.marginFont}>
            <span>History:</span>
          </div>
          { Object.keys(selectedRedux).length > 0 && (
            <IconList
              key={selectedRedux.place_id}
              title={selectedRedux.description}
              selectedRedux={`Place ID: ${selectedRedux.place_id}`}
            />
          )}
          { Object.keys(selectedRedux).length < 1 && (
            <div>
              No record yet
            </div>
          )}
        </Grid>
        <Grid item md={2} xs={1}/>
      </Grid>
    </div>
  );
}