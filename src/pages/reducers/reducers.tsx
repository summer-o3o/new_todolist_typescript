import { SUBMIT } from '../action/types';

const initialState = {
  todoList: {
    id: 0,
    value: '',
  },
};

type Action = {
  type: typeof SUBMIT;
  payload: {
    id: number;
    value: string;
  };
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SUBMIT:
      const newTodoList = {
        id: action.payload.id + 1,
        value: action.payload.value,
      };
      return {
        todoList: [state, state],
      };
    default:
      return state;
  }
};

export default rootReducer;
