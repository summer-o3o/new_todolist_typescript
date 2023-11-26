import { combineReducers } from 'redux';
import { SUBMIT, REMOVE } from '../action/types';

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };

    case REMOVE:
      console.log('state', state);
      console.log('action', action);
      return {
        todoList: state.todoList.filter(Item => Item.id !== action.payload),
      };
      return {};

    default:
      return state;
  }
};

const rootReducer = combineReducers({ todoList: todoReducer });
export default rootReducer;
