import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NotFound from '../NotFound';

describe('NotFound component', () => {
  it('renders loading element correctly', () => {
    const { container } = render(<NotFound />)

    expect(container).toMatchSnapshot();
  })
})