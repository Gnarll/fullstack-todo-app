import { call, put, Effect, takeEvery } from "redux-saga/effects";
import {
  ICreateAction,
  IDeleteAction,
  ITodo,
  ITodoActionTypes,
} from "../../types/types";
import { TodoApi } from "../../api";

function* sagaCreateTodo(action: ICreateAction): Generator<Effect, void> {
  try {
    const todoObject: Partial<ITodo> = {
      title: action.payload,
      done: false,
    };

    const todo = yield call(TodoApi.createTodo, todoObject);
    yield put({ type: ITodoActionTypes.CREATE_TODO_SUCCESS, payload: todo });
  } catch (error) {
    console.log("Error", error);
  }
}

function* sagaDeleteTodo(action: IDeleteAction): Generator<Effect, void> {
  try {
    yield call(TodoApi.deleteTodo, action.payload);
    yield put({
      type: ITodoActionTypes.DELETE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    console.log("Error", error);
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(ITodoActionTypes.CREATE_TODO, sagaCreateTodo);
  yield takeEvery(ITodoActionTypes.DELETE_TODO, sagaDeleteTodo);
}
