import {createStore} from "redux";
import FlightReaducer from "./bookFlight/FlightReducer";

const store=createStore(FlightReaducer);
export default store;