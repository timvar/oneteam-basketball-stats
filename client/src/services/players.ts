import axios from 'axios';
import store, { getUser, getToken } from '../store';
import { Player } from '../store/player/types';
import { setAuthHeader, AxiosAuthConfig } from '../utils';

const baseUrl = '/api/players';

const getAll = async (): Promise<Player[]> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    console.log('config', config);
    return (await axios.get(baseUrl, config)).data;
  }
  return [];
};

export default { getAll };
