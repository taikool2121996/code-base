import { render, screen } from '@testing-library/react';
import CustomHeader from '@/components/CustomHeader';

describe('Custom Navbar', () => {
  test('Navbar should have logo', () => {
    render(<CustomHeader />);
    const image = screen.getByTestId('navbar-logo');
    expect(image).toHaveAttribute('alt', 'navbar-logo');
    // expect(image).toHaveAttribute('src', 'navbar-logo aaaa');
  });
});
