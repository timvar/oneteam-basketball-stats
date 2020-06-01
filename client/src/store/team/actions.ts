import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  Team,
  ADD_TEAM,
  UPDATE_TEAM,
  INIT_TEAMS,
  RESET_TEAMS,
  InitTeamsAction,
  AddTeamAction,
  UpdateTeamAction,
  TeamInput,
} from './types';
import teamService from '../../services/teams';

export const addTeam: ActionCreator<ThunkAction<
  Promise<AddTeamAction>,
  Team,
  TeamInput,
  AddTeamAction
>> = (teamInput: TeamInput) => {
  return async (dispatch: Dispatch) => {
    const payload = await teamService.createTeam(teamInput);
    if (!payload) throw new Error('Team creation failed.');
    const addTeamAction: AddTeamAction = {
      type: ADD_TEAM,
      payload,
    };
    return dispatch(addTeamAction);
  };
};

export const updateTeam: ActionCreator<ThunkAction<
  Promise<UpdateTeamAction>,
  Team,
  Team,
  UpdateTeamAction
>> = (team: Team) => {
  return async (dispatch: Dispatch) => {
    const payload = await teamService.updateTeam(team);
    if (!payload) throw new Error('Team update failed.');
    const updateTeamAction: UpdateTeamAction = {
      type: UPDATE_TEAM,
      payload,
    };
    return dispatch(updateTeamAction);
  };
};

/*
export const updateTeam = (payload: Team) => {
  return {
    type: UPDATE_TEAM,
    payload,
  };
};
*/

export const initTeams: ActionCreator<ThunkAction<
  Promise<void>,
  Team[],
  null,
  InitTeamsAction
>> = () => {
  return async (dispatch: Dispatch) => {
    const payload = await teamService.getAll();
    dispatch({
      type: INIT_TEAMS,
      payload,
    });
  };
};

export const resetTeams = () => {
  return {
    type: RESET_TEAMS,
  };
};
