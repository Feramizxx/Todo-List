import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadingComponent } from '.';

describe('Loading component', () => {
  it('should be circular element rendered in document', () => {
    render(<LoadingComponent />);

    const circularElement = screen.getByTestId('circular-test-id');
    // eslint-disable-next-line testing-library/no-node-access
    const parentElement = circularElement.parentElement as HTMLElement;

    expect(parentElement).toContainElement(circularElement);
  });
});
