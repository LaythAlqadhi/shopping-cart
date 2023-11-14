import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('renders in the document', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
})