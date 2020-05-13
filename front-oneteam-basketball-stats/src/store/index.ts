import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import eventReducer from './event/reducers';
import statReducer from './stat/reducers';

const rootReducer = combineReducers({
  lastEvent: eventReducer,
  stats: statReducer,
});

/*
export const getEvent = (state: State) => {
  return state.lastEvent;
};
*/

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
