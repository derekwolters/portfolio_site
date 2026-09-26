import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero headline', () => {
  render(<App />);
  const linkElement = screen.getByText(/crafting useful web experiences with personality/i);
  expect(linkElement).toBeInTheDocument();
});
