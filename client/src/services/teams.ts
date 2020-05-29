import axios from 'axios';
import store, { getUser, getToken } from '../store';
import { Team, TeamInput } from '../store/team/types';
import { setAuthHeader, AxiosAuthConfig } from '../utils';

const baseUrl = '/api/teams';

const getAll = async (): Promise<Team[]> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.get(baseUrl, config)).data;
  }

  return [];
};

const createTeam = async (team: TeamInput): Promise<Team | undefined> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.post(baseUrl, team, config)).data;
  }

  return undefined;
};

export default { getAll, createTeam };
