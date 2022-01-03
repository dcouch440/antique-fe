import { render, screen } from '@testing-library/react';

import ScrollContainer from './ScrollContainer';

function MockComponent() {
  return (
    <ScrollContainer>
      <div data-testid="inner-container" />
    </ScrollContainer>
  );
}

// Outdated

describe('ScrollContainer', () => {
  it('renders content as children in a container', () => {
    render(<MockComponent />);
    const innerContainer = screen.getByTestId('inner-container');
    expect(innerContainer).toBeInTheDocument();
  });
});
