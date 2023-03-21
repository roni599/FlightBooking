import { combineReducers } from "redux";
import FlightReaducer from "./bookFlight/FlightReducer";
const rootReducers=combineReducers({
    booking:FlightReaducer,
})
export default rootReducers;