import { ITodoActionTypes } from "../../types/types";

export const createTodo = (payload: string) => {
  return {
    type: ITodoActionTypes.CREATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: ITodoActionTypes.DELETE_TODO,
    payload,
  };
};
