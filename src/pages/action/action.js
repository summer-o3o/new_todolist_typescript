import { SUBMIT, REMOVE } from './types';

export const submit = (id, value) => ({
  type: SUBMIT,
  payload: {
    id,
    value,
  },
});

export const remove = id => ({
  type: REMOVE,
  payload: id,
});
