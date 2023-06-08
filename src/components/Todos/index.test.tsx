import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as queries from '../../store/TodosApi';
import { Todos as TodosInterface } from '../../Ts/Interface/Todos';
import Todos from '.';

describe('TodoDetail component', () => {
  it('houd be render Loading component is fetching status', () => {
    jest.spyOn(queries, 'useGetTodosQuery').mockImplementation(() => ({
      data: [] as TodosInterface[],
      error: false,
      isFetching: true,
      refetch: jest.fn(),
    }));

    render(<Todos />);

    const loadingComponent = screen.getByTestId('loading-test-id');
    expect(loadingComponent).toBeInTheDocument();
  });

  it('houd be render Error component is fetching status', () => {
    jest.spyOn(queries, 'useGetTodosQuery').mockImplementation(() => ({
      data: [] as TodosInterface[],
      error: true,
      isFetching: false,
      refetch: jest.fn(),
    }));

    render(<Todos />);
    const errorComponent = screen.getByTestId('errorText');
    expect(errorComponent).toBeInTheDocument();
  });

  it('should render TodoItem inside todo item', () => {
    jest.spyOn(queries, 'useGetTodosQuery').mockImplementation(() => ({
      data: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
      ] as TodosInterface[],
      error: false,
      isFetching: false,
      refetch: jest.fn(),
    }));
    render(
      <Router>
        <Todos />
      </Router>,
    );

    const itemComponent = screen.getAllByTestId('innertodoitem');
    expect(itemComponent).toHaveLength(1);
  });
});
