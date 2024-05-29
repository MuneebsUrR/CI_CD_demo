import { render, screen } from '@testing-library/react';
import App from './App';

test('Test 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Muneeb Ur Rehman/i);
  expect(linkElement).toBeInTheDocument();
});
