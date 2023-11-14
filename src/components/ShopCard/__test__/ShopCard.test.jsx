import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ShopCard from '../ShopCard';

describe('ShopCard component', () => {
  it('renders in the document', () => {
    const { container } = render(<ShopCard />);

    expect(container).toMatchSnapshot();
  })
})