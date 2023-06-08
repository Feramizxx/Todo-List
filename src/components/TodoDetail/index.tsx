import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTodoByIdQuery } from '../../store/TodosApi';
import { LoadingComponent } from '../Loading';
import { Error } from '../Error';
import { StyledRootBox, StyledMainBox } from './TodoDetailStyled';

export const TodoDetail = () => {
  const { id } = useParams();
  const { data: todosId, error, isFetching } = useGetTodoByIdQuery(Number(id));

  if (isFetching) {
    return <LoadingComponent />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <StyledRootBox>
      <StyledMainBox data-testid="detail-component">
        {todosId?.title}
      </StyledMainBox>
    </StyledRootBox>
  );
};
