import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Loading from '../Loading';

describe('Loading component', () => {
  it('renders loading element correctly', () => {
    const { container } = render(<Loading />)

    expect(container).toMatchSnapshot();
  })
})