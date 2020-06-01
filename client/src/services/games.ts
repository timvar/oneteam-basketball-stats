import axios from 'axios';
import store, { getUser, getToken } from '../store';
import { Game, GameInput } from '../store/game/types';
import { setAuthHeader, AxiosAuthConfig } from '../utils';

const baseUrl = '/api/games';

const getAll = async (): Promise<Game[]> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.get(baseUrl, config)).data;
  }
  return [];
};

const createGame = async (game: GameInput): Promise<Game | undefined> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.post(baseUrl, game, config)).data;
  }

  return undefined;
};

export default { getAll, createGame };
