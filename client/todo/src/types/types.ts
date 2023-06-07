export enum ITodoActionTypes {
  CREATE_TODO = "CREATE_TODO",
  CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS",
  GET_TODOS = "GET_TODOS",
  CHANGE_TODO = "CHANGE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  DELETE_TODO = "DELETE_TODO",
  DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS",
}

export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

export interface ITodoState {
  todos: ITodo[];
}

export interface ICreateAction {
  type: ITodoActionTypes.CREATE_TODO_SUCCESS;
  payload: string;
}

export interface IDeleteAction {
  type: ITodoActionTypes.DELETE_TODO_SUCCESS;
  payload: string;
}

export type ITodoAction = ICreateAction | IDeleteAction;

export interface ITodoReducer {
  todo: ITodoState;
}
