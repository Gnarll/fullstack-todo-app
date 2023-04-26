import { useDispatch, useSelector } from "react-redux";
import { ITodoReducer } from "../../../types/types";
import { FormEvent, ChangeEvent, useState } from "react";
import { createTodo } from "../../../redux/actions";
export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const state = useSelector((state: ITodoReducer) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;

    dispatch(createTodo(title));
    setTitle("");
  };

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-3 d-flex align-items-end justify-content-between"
    >
      <div className="form-group" style={{ width: "92%", marginRight: "10px" }}>
        <label htmlFor="" className="form-label">
          Введите название дела
        </label>
        <input
          type="text"
          className="form-control"
          onChange={handleChangeInputValue}
        />
      </div>
      <button className="btn btn-success">Создать</button>
    </form>
  );
};
