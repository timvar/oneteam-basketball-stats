import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import eventReducer from './event/reducers';
import statReducer from './stat/reducers';
import playerReducer from './player/reducers';
import userReducer from './user/reducers';
import teamReducer from './team/reducers';

const rootReducer = combineReducers({
  lastEvent: eventReducer,
  players: playerReducer,
  stats: statReducer,
  user: userReducer,
  teams: teamReducer,
});

export const getEvent = (state: AppState) => {
  return state.lastEvent;
};

export const getPlayers = (state: AppState) => {
  return state.players;
};

export const getStats = (state: AppState) => {
  return state.stats;
};

export const getUser = (state: AppState) => {
  return state.user.user;
};

export const getToken = (state: AppState) => {
  return state.user.user?.token;
};

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
