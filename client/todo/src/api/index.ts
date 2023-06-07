import axios from "axios";
import { ITodo, ITodoState } from "../types/types";

export class TodoApi {
  static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
    const res = await axios.post("http://localhost:4000/todos", todo);
    return res.data;
  }
  static async deleteTodo(id: string): Promise<void> {
    await axios.delete(`http://localhost:4000/todos/${id}`);
  }
}
