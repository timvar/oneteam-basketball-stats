import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import eventReducer from './event/reducers';
import statReducer from './stat/reducers';
import playerReducer from './player/reducers';
import userReducer from './user/reducers';
import teamReducer from './team/reducers';
import gameReducer from './game/reducers';
import rosterReducer from './roster/reducers';
import headerReducer from './header/reducers';
import scoreReducer from './score/reducers';

const rootReducer = combineReducers({
  events: eventReducer,
  players: playerReducer,
  stats: statReducer,
  user: userReducer,
  teams: teamReducer,
  game: gameReducer,
  roster: rosterReducer,
  header: headerReducer,
  score: scoreReducer,
});

export const getEvent = (state: AppState) => {
  return state.events.events[0];
};

export const getEvents = (state: AppState) => {
  return state.events.events;
};

export const getPlayers = (state: AppState) => {
  return state.players.players;
};

export const getStats = (state: AppState) => {
  return state.stats.stats;
};

export const getUser = (state: AppState) => {
  return state.user.user;
};

export const getTeams = (state: AppState) => {
  return state.teams.teams;
};

export const getGameTeam = (state: AppState) => {
  return state.game.game.team;
};

export const getGameId = (state: AppState) => {
  return state.game.game.id;
};

export const getToken = (state: AppState) => {
  return state.user.user?.token;
};

export const getRoster = (state: AppState) => {
  return state.roster.roster;
};

export const getHeaderTitle = (state: AppState) => {
  return state.header.title;
};

export const getScore = (state: AppState) => {
  return state.score.score;
};

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
