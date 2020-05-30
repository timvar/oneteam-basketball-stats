import {
  TeamState,
  ADD_TEAM,
  UPDATE_TEAM,
  INIT_TEAMS,
  RESET_TEAMS,
  TeamActionTypes,
  Team,
} from './types';

const initialState: TeamState = {
  teams: [],
};

const teamReducer = (
  state = initialState,
  action: TeamActionTypes
): TeamState => {
  let currTeam: Team;

  switch (action.type) {
    case INIT_TEAMS:
      return { ...state, teams: [...action.payload] };
    case ADD_TEAM:
      return { ...state, teams: [...state.teams, action.payload] };
    case UPDATE_TEAM:
      if (state.teams.find((p) => p.id === action.payload.id)) {
        currTeam = state.teams.find((p) => p.id === action.payload.id)!;
        currTeam.teamName = action.payload.teamName;
        const updatedPlayers = state.teams.map((p) =>
          p.id === action.payload.id ? currTeam : p
        );
        return { ...state, teams: [...updatedPlayers] };
      }
      return state;
    case RESET_TEAMS:
      return { ...state, teams: [] };
    default:
      return state;
  }
};

export default teamReducer;
