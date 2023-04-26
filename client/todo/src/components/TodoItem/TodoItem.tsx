import { ITodo } from "../../types/types";

interface ITodoProps {
  todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="">
        <span>{todo.title}</span>
      </div>
      <div className="">
        <button style={{ marginRight: "10px" }} className="btn btn-primary">
          Изменить
        </button>
        <button style={{ marginRight: "10px" }} className="btn btn-success">
          Завершить
        </button>
        <button className="btn btn-danger">Удалить</button>
      </div>
    </li>
  );
};
