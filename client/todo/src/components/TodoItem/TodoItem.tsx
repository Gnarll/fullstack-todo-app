import { ITodo } from "../../types/types";
import { ChangeEvent, useState } from "react";
import "./styles.css";

interface ITodoProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  doneTodo: (id: string, done: boolean) => void;
  changeTodo: (title: string, done: boolean, id: string) => void;
}

export const TodoItem = ({
  todo,
  deleteTodo,
  doneTodo,
  changeTodo,
}: ITodoProps) => {
  const [isTodoEdit, setIsTodoEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      changeTodo(newTitle, todo.done, todo.id);
      setIsTodoEdit(!isTodoEdit);
    }
  };

  const handleTodoEdit = () => setIsTodoEdit(!isTodoEdit);
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleComplete = () => {
    doneTodo(todo.id, !todo.done);
  };
  return (
    <li
      className={`todo-item list-group-item d-flex justify-content-between align-items-center ${
        todo.done ? "list-group-item-success" : ""
      }`}
    >
      <div className="todo-text" onKeyDown={handleSubmit}>
        {isTodoEdit ? (
          <input type="text" onChange={handleTitleChange} />
        ) : (
          <span className={`${todo.done ? "title-done" : ""}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div className="todo-btns">
        <button className="btn btn-primary todo-btn " onClick={handleTodoEdit}>
          Изменить
        </button>
        <button onClick={handleComplete} className="btn btn-success todo-btn">
          {!todo.done ? "Завершить" : "Возобновить"}
        </button>
        <button className="btn btn-danger todo-btn" onClick={handleDelete}>
          Удалить
        </button>
      </div>
    </li>
  );
};
