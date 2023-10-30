import { SUBMIT, REMOVE } from './types';

let nextId = 1;

export const sumbit = (value: string) => ({
  type: SUBMIT,
  payload: { id: nextId++, value },
});

export const remove = (id: number) => ({
  type: REMOVE,
  payload: { id },
});
