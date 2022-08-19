import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from 'react-redux'

// import {
//   setRetrievePlaces,
//   setRetrievePlacesSuccess,
//   setRetrievePlacesFailed
// } from "../redux/actions";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const dispatch = useDispatch();

  const places = useSelector(state => state.places.list)
  console.log("places:", places)

  return (
    <div className={styles.container}>
      <div>
        <span>With default Theme:</span>
      </div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
    </div>
  );
}