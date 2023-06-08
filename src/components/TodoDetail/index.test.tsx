import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as queries from '../../store/TodosApi';
import { Todos } from '../../Ts/Interface/Todos';
import { TodoDetail } from '.';

describe('TodoDetail component', () => {
  it('houd be render Loading component is fetching status', () => {
    jest.spyOn(queries, 'useGetTodoByIdQuery').mockImplementation(() => ({
      data: {} as Todos,
      error: false,
      isFetching: true,
      refetch: jest.fn(),
    }));

    render(<TodoDetail />);

    const loadingComponent = screen.getByTestId('loading-test-id');

    expect(loadingComponent).toBeInTheDocument();
  });

  it('houd be render Error component is fetching status', () => {
    jest.spyOn(queries, 'useGetTodoByIdQuery').mockImplementation(() => ({
      data: {} as Todos,
      error: true,
      isFetching: false,
      refetch: jest.fn(),
    }));

    render(<TodoDetail />);

    const errorComponent = screen.getByTestId('errorText');

    expect(errorComponent).toBeInTheDocument();
  });

  it('should be render for its id', () => {
    jest.spyOn(queries, 'useGetTodoByIdQuery').mockImplementation(() => ({
      data: {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      } as Todos,
      error: false,
      isFetching: false,
      refetch: jest.fn(),
    }));
    render(<TodoDetail />);

    const toForItsId = screen.getByTestId('detail-component');
    expect(toForItsId).toBeInTheDocument();
  });
});
