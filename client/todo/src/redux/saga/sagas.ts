import { call, put, Effect, takeEvery } from "redux-saga/effects";
import {
  ICompleteAction,
  ICreateAction,
  IDeleteAction,
  ITodo,
  ITodoActionTypes,
} from "../../types/types";
import { TodoApi } from "../../api";

function* sagaGetTodos(): Generator<Effect, void, ITodo[]> {
  try {
    const todos = yield call(TodoApi.getTodos);
    yield put({ type: ITodoActionTypes.GET_TODOS_SUCCESS, payload: todos });
  } catch (error) {
    console.log("Error", error);
  }
}

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

function* sagaCompleteTodo(
  action: ICompleteAction<ITodo>
): Generator<Effect, void> {
  try {
    const todoObject: Partial<ITodo> = {
      done: action.payload.done,
      id: action.payload.id,
    };
    yield call(TodoApi.completeTodo, todoObject);
    yield put({
      type: ITodoActionTypes.COMPLETE_TODO_SUCCESS,
      payload: action.payload.id,
    });
  } catch (error) {
    console.log("Error", error);
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(ITodoActionTypes.CREATE_TODO, sagaCreateTodo);
  yield takeEvery(ITodoActionTypes.DELETE_TODO, sagaDeleteTodo);
  yield takeEvery(ITodoActionTypes.GET_TODOS, sagaGetTodos);
  yield takeEvery(ITodoActionTypes.COMPLETE_TODO, sagaCompleteTodo);
}
