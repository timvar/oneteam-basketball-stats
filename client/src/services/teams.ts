import axios from 'axios';
import store, { getUser, getToken } from '../store';
import { Team, TeamInput } from '../store/team/types';
import { Game } from '../store/game/types';
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

const getGamesByTeam = async (team: Team): Promise<Game[] | undefined> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.get(`${baseUrl}/${team.id}/games`, config)).data;
  }
  return undefined;
};

const createTeam = async (team: TeamInput): Promise<Team | undefined> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.post(baseUrl, team, config)).data;
  }
  return undefined;
};

const updateTeam = async (team: Team): Promise<Team | undefined> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (
      await axios.put(
        `${baseUrl}/${team.id}`,
        { teamName: team.teamName },
        config
      )
    ).data;
  }
  return undefined;
};

export default { getAll, getGamesByTeam, createTeam, updateTeam };
