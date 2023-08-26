import { combineReducers, createStore } from "redux";
import { ticketReducer } from "./reducers/ticketReducer";

const rootReducer = combineReducers({
  ticketReducer: ticketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
