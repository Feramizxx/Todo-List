import React from 'react';
import { Todos as TodosInterface } from '../../Ts/Interface/Todos';
import TodoItem from '../TodoItem';
import { useGetTodosQuery } from '../../store/TodosApi';
import { LoadingComponent } from '../Loading';
import { Error } from '../Error';
import { StyledBox, StyledPaper } from './TodosStyled';

const Todos = () => {
  const { data: todos, error, isFetching } = useGetTodosQuery();
  if (isFetching) {
    return <LoadingComponent />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <StyledBox sx={{ marginX: 'auto' }}>
      <StyledPaper elevation={24}>
        {todos?.map((todo: TodosInterface) => (
          <TodoItem key={todo.id} todos={todo} />
        ))}
      </StyledPaper>
    </StyledBox>
  );
};
export default Todos;
