import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

describe('Home component', () => {
  it('renders loading element correctly', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot();
  })
})