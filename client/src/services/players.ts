import axios from 'axios';
import store, { getUser, getToken } from '../store';
import { Player, PlayerInput } from '../store/player/types';
import { setAuthHeader, AxiosAuthConfig } from '../utils';

const baseUrl = '/api/players';

const getAll = async (): Promise<Player[]> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.get(baseUrl, config)).data;
  }
  return [];
};

const createPlayer = async (
  player: PlayerInput
): Promise<Player | undefined> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.post(baseUrl, player, config)).data;
  }

  return undefined;
};

export default { getAll, createPlayer };
