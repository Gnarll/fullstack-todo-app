import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";
import { ITodoReducer } from "../../types/types";
import { TodoItem } from "../TodoItem/TodoItem";
import "./styles.css";

export const TodoList = () => {
  const state = useSelector((state: ITodoReducer) => state.todo);
  return (
    <TransitionGroup component="ul" className="list-group">
      {state.todos.map((todo) => {
        return (
          <CSSTransition timeout={800} classNames={"todo"} key={todo.id}>
            <TodoItem todo={todo} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
