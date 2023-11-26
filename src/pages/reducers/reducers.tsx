import { SUBMIT, REMOVE } from '../action/types';

const initialState = {
  todoList: [],
};

interface Todo {
  id: number;
  value: string;
}

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
        ...state,
        todoList: [newTodoList, ...state.todoList],
      };

    case REMOVE:
      return {
        todoList: state.todoList.filter(
          (todoItem: Todo) => todoItem.id !== action.payload.id,
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
