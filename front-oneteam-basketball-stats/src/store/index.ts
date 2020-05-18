import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import eventReducer from './event/reducers';
import statReducer from './stat/reducers';
import playerReducer from './player/reducers';

const rootReducer = combineReducers({
  lastEvent: eventReducer,
  players: playerReducer,
  stats: statReducer,
});

export const getEvent = (state: AppState) => {
  return state.lastEvent;
};

export const getPlayers = (state: AppState) => {
  return state.players;
};

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
