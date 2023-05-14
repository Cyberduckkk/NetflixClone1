import { render, screen } from '@testing-library/react';
import English from './English';

test('renders learn react link', () => {
  render(<English />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
