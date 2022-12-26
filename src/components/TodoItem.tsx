import React from "react";
import classes from "../components/TodoItem.module.css"


const TodoItem: React.FC<{text: string, onRemoveHandler:()=> void}> = (props) => {
  return <li onClick={props.onRemoveHandler} className={classes.item}>{props.text}</li>;
};

export default TodoItem;
