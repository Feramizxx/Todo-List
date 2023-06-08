import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Error } from '.';

test('testing error component', () => {
  render(<Error />);
  const spanElement = screen.getByText(
    '404 not found!!, The request URL was not found!',
  );
  expect(spanElement).toHaveTextContent(
    '404 not found!!, The request URL was not found!',
  );
});
