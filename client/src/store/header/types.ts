export interface HeaderTitle {
  title: string;
}

export interface HeaderState {
  title: string;
}

export const SET_TITLE = 'SET_TITLE';

interface SetTitleAction {
  type: typeof SET_TITLE;
  payload: string;
}

export type HeaderActionTypes = SetTitleAction;
