import { SET_TITLE } from './types';

export const setHeaderTitle = (title: string) => {
  return {
    type: SET_TITLE,
    payload: title,
  };
};
