import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import TodoItem from '.';

describe('Loading component', () => {
  const todo = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };

  it('navigates to the correct page when Link is clicked', () => {
    render(
      <Router>
        <TodoItem todos={todo} />
      </Router>,
    );

    const todoId = screen.getByTestId('todo-1');
    expect(todoId).toBeInTheDocument();
    expect(todoId).toHaveTextContent('delectus aut autem');
  });
});
