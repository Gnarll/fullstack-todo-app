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
      console.log(1);

      changeTodo(newTitle, todo.done, todo.id);
      console.log(newTitle);
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
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.done ? "list-group-item-success" : ""
      }`}
    >
      <div onKeyDown={handleSubmit}>
        {isTodoEdit ? (
          <input type="text" onChange={handleTitleChange} />
        ) : (
          <span className={`${todo.done ? "title-done" : ""}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div className="">
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-primary"
          onClick={handleTodoEdit}
        >
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
