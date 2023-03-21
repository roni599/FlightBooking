import { BOOKFLIGHT, DELETEBOOKED } from "../bookFlight/actionsType";
const initialState = [
    
];
const matchId = (state) => {
  const newId = state.reduce((maxid, BookedId) => {
    return Math.max(BookedId.id, maxid);
  }, 0);
  return newId + 1;
};
const FlightReaducer = (state = initialState, action) => {
   console.log(action.payload.to)
  switch (action.type) {
    case BOOKFLIGHT:
      const id = matchId(state);
      return [
        ...state,
        {
          id: id,
          ...action.payload,
        },
      ];
    case DELETEBOOKED:
      return {};
    default:
      return state;
  }
};
export default FlightReaducer;
