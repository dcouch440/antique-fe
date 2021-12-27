import {
  getFeedButton,
  getMessagesButton,
  getNavButton,
} from './SidebarTypeSelectors/index.test';
import { render, screen } from '@testing-library/react';

import MockProviders from 'components/testUtils/MockProviders';
import Sidebar from '.';
import { act } from 'react-dom/test-utils';

const getSidebarClosed = () => screen.getByTestId(`Sidebar-closed`);
const getSidebarOpen = () => screen.getByTestId(`Sidebar-open`);

describe('Sidebar', () => {
  const setup = () => {
    render(<MockProviders component={<Sidebar />} />);
    console.log = jest.fn();
  };

  it('renders the sidebar closed on page load', () => {
    setup();
    const sidebarClosed = getSidebarClosed();
    expect(sidebarClosed).toBeInTheDocument();
  });

  const typeButtons = [getFeedButton, getMessagesButton, getNavButton];

  typeButtons.forEach((button) => {
    it('opens when a Nav type selector is pressed', () => {
      setup();
      act(() => {
        button().dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      const navbarOpen = getSidebarOpen();
      expect(navbarOpen).toBeInTheDocument();
    });
  });

  it('opens when a Freed type selector is pressed', () => {
    setup();
    act(() => {
      getFeedButton().dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const navbarOpen = getSidebarOpen();
    expect(navbarOpen).toBeInTheDocument();
  });
});
