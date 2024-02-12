import { render, screen } from '@testing-library/react';
import App from '../App';

test('Tests for a HomePage Element', () => {
  render(<App />);
  const specialsElement = screen.queryByText('This weeks specials!');
  expect(specialsElement).toBeInTheDocument();
});
