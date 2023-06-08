import React from 'react';
import { Todos } from '../../Ts/Interface/Todos';
import { StyledLink, StyledListItem } from './TodoItemStyled';

type Props = {
  todos: Todos;
};

const TodoItem = ({ todos }: Props) => (
  <StyledLink
    data-testid="innertodoitem"
    role="link"
    aria-label="Go to About"
    to={`${process.env.REACT_APP_DETAIL_URL}/${todos.id}`}
  >
    <StyledListItem
      data-testid={`todo-${todos.id}`}
      sx={todos.id % 2 === 0 ? { bgcolor: 'white' } : { bgcolor: '#B2BEB5' }}
    >
      <span>
        {todos.id}
        {'. '}
      </span>
      {todos.title}
    </StyledListItem>
  </StyledLink>
);
export default TodoItem;
