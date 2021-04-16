import { render, screen } from '@testing-library/react';
import App from './App';
import Title from './components/title.js'
import List from './components/list.js'


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
