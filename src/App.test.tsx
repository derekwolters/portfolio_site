import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /company website/i });
  expect(linkElement).toBeInTheDocument();
});
