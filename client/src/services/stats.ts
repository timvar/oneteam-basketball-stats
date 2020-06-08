import axios from 'axios';
import store, { getUser, getToken } from '../store';
import { StatToDB, StatFromDB } from '../store/stat/types';
import { setAuthHeader, AxiosAuthConfig } from '../utils';

const baseUrl = '/api/stats';

const getAll = async (): Promise<StatFromDB[]> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.get(baseUrl, config)).data;
  }
  return [];
};

const createStat = async (stat: StatToDB): Promise<StatFromDB | undefined> => {
  let config: AxiosAuthConfig;
  if (getUser(store.getState())) {
    config = setAuthHeader(getToken(store.getState()));
    return (await axios.post(baseUrl, stat, config)).data;
  }

  return undefined;
};

export default { getAll, createStat };
