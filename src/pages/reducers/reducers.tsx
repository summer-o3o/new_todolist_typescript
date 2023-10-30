import { SUBMIT, REMOVE } from '../action/types';

const initialState = {
  todoList: [],
};

type Action = {
  type: typeof SUBMIT | typeof REMOVE;
  payload: {
    id: number;
    value: string;
  };
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SUBMIT:
      const newTodoList = {
        id: action.payload.id++,
        value: action.payload.value,
      };
      return {
        todoList: [newTodoList, ...state.todoList],
      };

    case REMOVE:
      return state.filter((todoList: []) => todoList.id !== action.payload);

    default:
      return state;
  }
};

export default rootReducer;
