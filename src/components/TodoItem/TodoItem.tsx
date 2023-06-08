import { Todos } from "../../Ts/Interface/Todos";
import { StyledLink, StyledListItem } from "./TodoItemStyled";
type Props = {
  todos: Todos;
};

const TodoItem = ({ todos }: Props) => {
  return (
    <StyledLink to={`${process.env.REACT_APP_DETAIL_URL}/${todos.id}`}>
      <StyledListItem
        sx={todos.id % 2 === 0 ? { bgcolor: "white" } : { bgcolor: "	#B2BEB5" }}
      >
        <span>
          {todos.id}
          {". "}
        </span>
        {todos.title}
      </StyledListItem>
    </StyledLink>
  );
};
export default TodoItem;
