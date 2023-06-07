import { ITodo } from "../../types/types";
import "./styles.css";

interface ITodoProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  doneTodo: (id: string, done: boolean) => void;
}

export const TodoItem = ({ todo, deleteTodo, doneTodo }: ITodoProps) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleComplete = () => {
    doneTodo(todo.id, !todo.done);
  };
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.done ? "list-group-item-success" : ""
      }`}
    >
      <div className="">
        <span className={`${todo.done ? "title-done" : ""}`}>{todo.title}</span>
      </div>
      <div className="">
        <button style={{ marginRight: "10px" }} className="btn btn-primary">
          Изменить
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={handleComplete}
          className="btn btn-success"
        >
          {!todo.done ? "Завершить" : "Возобновить"}
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Удалить
        </button>
      </div>
    </li>
  );
};
