import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnderConstruction from '../../app/components/UnderConstruction';

describe('UnderConstruction Page', () => {
  it('renders the UnderConstruction component without crashing', () => {
    render(<UnderConstruction />);
    const heading = screen.getByRole('heading', {
      name: /under construction/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the heading correctly', () => {
    render(<UnderConstruction />);
    const heading = screen.getByRole('heading', { name: /under construction/i });
    expect(heading).toHaveTextContent('🚧 Under Construction 🚧');
  });

  it('displays the message about coming soon', () => {
    render(<UnderConstruction />);
    const message = screen.getByText(/we’re working hard to bring you a great experience/i);
    expect(message).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<UnderConstruction />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an accessible heading', () => {
    render(<UnderConstruction />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveAccessibleName(/under construction/i);
  });
});
