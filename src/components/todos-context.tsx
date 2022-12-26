import Todos from "../models/Todo";
import React, { useState } from "react";
import Todo from "../models/Todo";

type TodosCtxObj = {
  items: Todos[];
  addTodoHandler: (text: string) => void;
  removeTodoHanler: (id: string) => void;
};
export const TodosContext = React.createContext<TodosCtxObj>({
  items: [],
  addTodoHandler: () => {},
  removeTodoHanler: () => {},
});

const TodoProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const NewTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(NewTodo);
    });
  };

  const removeTodoHanler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  const contexVal: TodosCtxObj = {
    items: todos,
    removeTodoHanler: removeTodoHanler,
    addTodoHandler: addTodoHandler,
  };

  return (
    <TodosContext.Provider value={contexVal}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoProvider;
