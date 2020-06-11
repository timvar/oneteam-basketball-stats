import {
  ADD_ONE,
  ADD_TWO,
  ADD_THREE,
  REDUCE_ONE,
  REDUCE_TWO,
  REDUCE_THREE,
} from './types';

export const addOne = () => {
  return {
    type: ADD_ONE,
  };
};

export const addTwo = () => {
  return {
    type: ADD_TWO,
  };
};

export const addThree = () => {
  return {
    type: ADD_THREE,
  };
};

export const reduceOne = () => {
  return {
    type: REDUCE_ONE,
  };
};

export const reduceTwo = () => {
  return {
    type: REDUCE_TWO,
  };
};

export const reduceThree = () => {
  return {
    type: REDUCE_THREE,
  };
};
