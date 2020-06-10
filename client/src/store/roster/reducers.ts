import {
  RosterState,
  ADD_TO_ROSTER,
  REMOVE_FROM_ROSTER,
  RESET_ROSTER,
  RosterActionTypes,
} from './types';
import { Player } from '../player/types';

const initialState: RosterState = {
  roster: [],
};

const rosterReducer = (
  state = initialState,
  action: RosterActionTypes
): RosterState => {
  let newRoster: Player[];
  switch (action.type) {
    case ADD_TO_ROSTER:
      return { ...state, roster: [...state.roster, action.payload] };
    case REMOVE_FROM_ROSTER:
      newRoster = state.roster.filter((p) => p.id !== action.payload.id);
      return { ...state, roster: newRoster };
    case RESET_ROSTER:
      return { ...state, roster: action.payload };
    default:
      return state;
  }
};

export default rosterReducer;
