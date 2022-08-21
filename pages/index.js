import { useEffect, useRef, useState } from 'react';
import s from "../styles/Home.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from 'react-redux'
import usePlacesAutocomplete from "use-places-autocomplete";
import IconList from '../components/IconList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import IconButton from '@mui/material/IconButton';

import {
  setListPlaces,
  setSelectedPlaces,
  resetPlaces,
  resetFavoritePlaces,
  removeFavoritePlacesById,
  setFavoritePlaces,
  setHistoryPlaces,
  resetHistoryPlaces,
  removeHistoryPlacesById,
} from "../redux/actions/places";

export default function Home() {
  const dispatch = useDispatch();

  const redux = useSelector(state => state.places)
  const listRedux = useSelector(state => state.places.list)
  const selectedRedux = useSelector(state => state.places.selected)
  const favouriteRedux = useSelector(state => state.places.favorite)
  const historyRedux = useSelector(state => state.places.history)

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
      <Grid container sx={{ marginBottom: 2 }}>
        <Grid item md={2} xs={1}/>
        <Grid item md={8} xs={10}>
          <div className={s.marginTitle}>
            <span className={s.fontTitle}>Store Your Google Place Search Result!!</span>
          </div>
          <div className={s.marginSubtitle}>
            <span className={s.fontSubtitle}>{`Don't think much just find it here =)`}</span>
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
            if (value !== null) {
              setSelectedPlace(value)
              dispatch(setSelectedPlaces(value))
              dispatch(setListPlaces(data))
              dispatch(setHistoryPlaces(value))
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(setFavoritePlaces(selectedPlace))}
        >
          Add to Favourite
        </Button>
        <Grid item md={2} xs={1}/>
        </Grid>
      </Grid>
      <Grid container className={s.search}>
        <Grid item md={2} xs={0}/>
        <Grid item md={4} xs={12}>
          <div className={s.marginFont}>
            <span>Favourite:</span>
            <span>
              <IconButton onClick={() => dispatch(resetFavoritePlaces())}>
                <FolderDeleteIcon/>
              </IconButton>
            </span>
          </div>
          { favouriteRedux.length > 0 && (
            <div>
              { favouriteRedux.map((place) => {
                return (
                  <IconList
                    key={place.place_id}
                    title={place.description}
                    onClickDelete={() => dispatch(removeFavoritePlacesById(place))}
                  />
                )
              })}
            </div>
          )}
          { favouriteRedux.length < 1 && (
            <div className={s.marginFont}>
              No record yet
            </div>
          )}

        </Grid>
        <Grid item md={4} xs={12}>
          <div className={s.marginFont}>
            <span>History: </span>
            <span>
              <IconButton onClick={() => dispatch(resetHistoryPlaces())}>
                <FolderDeleteIcon />
              </IconButton>
            </span>
          </div>
          { historyRedux.length > 0 && (
            <div>
              { historyRedux.map((place) => {
                return (
                  <IconList
                    key={place.place_id}
                    title={place.description}
                    onClickDelete={() => dispatch(removeHistoryPlacesById(place))}
                  />
                )
              })}
            </div>
          )}
          { historyRedux.length < 1 && (
            <div className={s.marginFont}>
              No record yet
            </div>
          )}
        </Grid>
        <Grid item md={2} xs={1}/>
      </Grid>
    </div>
  );
}