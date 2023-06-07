export enum ITodoActionTypes {
  CREATE_TODO = "CREATE_TODO",
  CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS",
  GET_TODOS = "GET_TODOS",
  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
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
  type: ITodoActionTypes.CREATE_TODO_SUCCESS | ITodoActionTypes.CREATE_TODO;
  payload: string;
}

export interface IDeleteAction {
  type: ITodoActionTypes.DELETE_TODO_SUCCESS | ITodoActionTypes.DELETE_TODO;
  payload: string;
}

export interface IGetAction {
  type: ITodoActionTypes.GET_TODOS_SUCCESS | ITodoActionTypes.GET_TODOS;
  payload?: ITodoState;
}

export type ITodoAction = ICreateAction | IDeleteAction | IGetAction;

export interface ITodoReducer {
  todo: ITodoState;
}
