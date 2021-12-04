import { render, screen } from '@testing-library/react';
import React from 'react';
import ScrollContainer from '.';

function MockComponent() {
  return (
    <ScrollContainer>
      <div data-testid="inner-container" />
    </ScrollContainer>
  );
}

describe('ScrollContainer', () => {
  it('renders content as children in a container', () => {
    render(<MockComponent />);
    const innerContainer = screen.getByTestId('inner-container');
    expect(innerContainer).toBeInTheDocument();
  });
});
