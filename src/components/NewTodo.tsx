import React, { useRef,useContext } from "react";
import classes from "../components/NewTodo.module.css"
import { TodosContext } from "./todos-context";
const NewTodo: React.FC = () => {

  const todoContext=useContext(TodosContext)

  const todoText = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoText.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    todoContext.addTodoHandler(enteredText)
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={todoText} />
      <button>Submit</button>
    </form>
  );
};
export default NewTodo;
