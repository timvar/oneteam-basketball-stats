import { Action } from 'redux';

export interface HeaderTitle {
  title: string;
}

export interface HeaderState {
  title: string;
}

export const SET_TITLE = 'SET_TITLE';

interface SetTitleAction extends Action<typeof SET_TITLE> {
  type: typeof SET_TITLE;
  payload: string;
}

export type HeaderActionTypes = SetTitleAction;
