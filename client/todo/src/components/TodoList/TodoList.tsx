import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { ITodoReducer } from "../../types/types";
import { TodoItem } from "../TodoItem/TodoItem";
import "./styles.css";
import { deleteTodo } from "../../redux/actions";

export const TodoList = () => {
  const state = useSelector((state: ITodoReducer) => state.todo);
  const dispatch = useDispatch();

  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <TransitionGroup component="ul" className="list-group">
      {state.todos.map((todo) => {
        return (
          <CSSTransition timeout={800} classNames={"todo"} key={todo.id}>
            <TodoItem todo={todo} deleteTodo={removeTodo} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
