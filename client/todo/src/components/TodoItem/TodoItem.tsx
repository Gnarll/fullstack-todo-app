import { ITodo } from "../../types/types";

interface ITodoProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
}

export const TodoItem = ({ todo, deleteTodo }: ITodoProps) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

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
        <button className="btn btn-danger" onClick={handleDelete}>
          Удалить
        </button>
      </div>
    </li>
  );
};
