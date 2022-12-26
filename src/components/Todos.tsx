import React,{useContext} from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "./todos-context";
import classes from "../components/Todos.module.css"
const Todos:React.FC  = () => {
 const todoCtx=useContext(TodosContext)
  
  return (
    <div>
      <ul className={classes.todos}>
        {todoCtx.items.map((item)=>{
            return <TodoItem onRemoveHandler={todoCtx.removeTodoHanler.bind(null,item.id)}  key={item.id} text={item.text}/>
        })}
      </ul>
    </div>
  );
};

export default Todos;
