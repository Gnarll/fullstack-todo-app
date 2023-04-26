import { ITodoAction, ITodoActionTypes, ITodoState } from "../types/types";

export const initialState = {
  todos: [],
};

export const todoReducer = (
  state: ITodoState = initialState,
  action: ITodoAction
) => {
  switch (action.type) {
    case ITodoActionTypes.CREATE_TODO: {
      return { todos: [...state.todos, action.payload] };
    }
    default:
      return state;
  }
};
