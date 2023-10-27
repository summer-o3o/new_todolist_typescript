import { SUBMIT } from './types';

export const sumbit = (id: number, value: string) => ({
  type: SUBMIT,
  payload: { id: id, value: value },
});
