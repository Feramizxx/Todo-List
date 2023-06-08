import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Error } from './Error';
test('testing error component', () => {
  render(<Error />);
  const spanElement = screen.getByTestId('errorText');
  expect(spanElement).toHaveTextContent(
    '404 not found!!, The request URL was not found!'
  );
  
});
