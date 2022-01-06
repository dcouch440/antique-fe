import {
  SIDEBAR_AUTH,
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';
import { render, screen } from '@testing-library/react';

import MockProviders from 'components/testUtils/MockProvider';
import SidebarTypeSelectors from './SidebarTypeSelectors';

const setup = () => {
  console.log = jest.fn();
  render(<MockProviders component={<SidebarTypeSelectors />} />);
};
export const getMessagesButton = () =>
  screen.getByTestId(`AppSidebarTypeSelector-${SIDEBAR_MESSAGES}`);
export const getFeedButton = () =>
  screen.getByTestId(`AppSidebarTypeSelector-${SIDEBAR_FEED}`);
export const getNavButton = () =>
  screen.getByTestId(`AppSidebarTypeSelector-${SIDEBAR_NAVIGATION}`);
export const getAuthButton = () =>
  screen.getByTestId(`AppSidebarTypeSelector-${SIDEBAR_AUTH}`);

describe('SidebarTypeSelectors', () => {
  beforeEach(setup);

  it('Renders the type selectors on the page', () => {
    // getAuthButton currently displays in page even though
    // the logic has described it not to be
    // possibly a problem with redux + state of render cycle
    // ! fix later ?
    expect(getMessagesButton()).toBeInTheDocument();
    expect(getFeedButton()).toBeInTheDocument();
    expect(getNavButton()).toBeInTheDocument();
    expect(getAuthButton()).toBeInTheDocument();
  });
});
